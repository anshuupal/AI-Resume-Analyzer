from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from app.services.ai_feedback import generate_ai_feedback
import os

from app.services.pdf_parser import extract_text_from_pdf
from app.services.skill_extractor import extract_skills


app = FastAPI()


# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@app.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):

    # Save uploaded PDF
    file_path = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())


    # Extract resume text
    resume_text = extract_text_from_pdf(file_path)


    # Extract skills
    resume_skills = extract_skills(resume_text)

    job_skills = extract_skills(job_description)


    # Debugging
    print("Resume Skills:", resume_skills)
    print("Job Skills:", job_skills)
    print("Resume Text:", resume_text[:500])


    # Find matched and missing skills
    matched_skills = list(
        set(resume_skills) &
        set(job_skills)
    )


    missing_skills = list(
        set(job_skills) -
        set(resume_skills)
    )


    # Calculate ATS score
    if len(job_skills) > 0:

        score = round(
            (len(matched_skills) / len(job_skills)) * 100
        )

    else:

        score = 0



    # Generate suggestions
    suggestions = []


    for skill in missing_skills:

        suggestions.append(
            f"Consider adding {skill} to your resume if you have experience with it."
        )


    if score >= 90:

        suggestions.append(
            "Excellent match! Your resume aligns very well with the job description."
        )

    elif score >= 70:

        suggestions.append(
            "Good match. Adding the missing skills could improve your ATS score."
        )

    else:

        suggestions.append(
            "Your resume needs improvement to better match this job description."
        )
    # AI Feedback from Ollama
    ai_feedback = generate_ai_feedback(
        resume_text,
        job_description
    )


    # Send response to frontend
    return {

        "filename": file.filename,

        "ats_score": score,

        "matched_skills": matched_skills,

        "missing_skills": missing_skills,

        "suggestions": suggestions,

        "ai_feedback": ai_feedback

    }