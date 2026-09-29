import requests


def generate_ai_feedback(resume_text, job_description):

    prompt = f"""
You are an expert technical recruiter.

Analyze this resume against the job description.

Resume:
{resume_text}

Job Description:
{job_description}


Give feedback in this format:

Strengths:
- 

Weaknesses:
-

Recommendations:
-
"""


    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "gemma3:latest",
            "prompt": prompt,
            "stream": False
        },
        timeout=120
    )


    data = response.json()


    return data["response"]