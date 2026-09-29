def calculate_ats_score(resume_skills, job_skills):

    resume_skills = set(resume_skills)
    job_skills = set(job_skills)

    matched_skills = resume_skills.intersection(job_skills)

    missing_skills = job_skills - resume_skills


    if len(job_skills) == 0:
        score = 0
    else:
        score = (len(matched_skills) / len(job_skills)) * 100


    return {
        "ats_score": round(score, 2),
        "matched_skills": list(matched_skills),
        "missing_skills": list(missing_skills)
    }