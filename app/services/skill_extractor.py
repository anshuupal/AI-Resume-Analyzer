SKILLS = [
    "python",
    "java",
    "c++",
    "sql",
    "mysql",
    "postgresql",
    "fastapi",
    "django",
    "flask",
    "react",
    "node",
    "javascript",
    "html",
    "css",
    "docker",
    "aws",
    "machine learning",
    "deep learning",
    "tensorflow",
    "pytorch",
    "git"
]


def extract_skills(text):

    text = text.lower()

    found_skills = []

    for skill in SKILLS:
        if skill in text:
            found_skills.append(skill)

    return found_skills