# 🚀 AI Resume Analyzer

An intelligent, full-stack web application designed to parse PDF resumes, evaluate them against target job descriptions using ATS (Applicant Tracking System) matching logic, and deliver actionable AI-driven feedback for career improvement.

---

## 🛠️ Tech Stack

### Frontend (`resume-analyzer-ui`)
* **React** (built with **Vite** for blazing-fast performance)
* **Tailwind CSS** for modern, responsive UI styling
* **Lucide / Custom Icons** for dashboard visuals

### Backend & Core Services (`app/`)
* **Python** (Core application and API logic in `main.py`)
* **PDF Parsing & Text Extraction** (`pdf_parser.py`)
* **Skill Extraction & NLP Processing** (`skill_extractor.py`)
* **ATS Compatibility Scoring Engine** (`ats_score.py`)
* **AI Feedback Generation Module** (`ai_feedback.py`)

---

## 📁 Project Structure

```text
AI-Resume-Analyzer/
├── app/                  # Python Backend Services
│   ├── services/
│   │   ├── ai_feedback.py
│   │   ├── ats_score.py
│   │   ├── pdf_parser.py
│   │   └── skill_extractor.py
│   ├── __pycache__/
│   └── main.py           # FastAPI / Flask entry point
├── resume-analyzer-ui/   # React Frontend Application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/   # Navbar, Hero, UploadBox, ResultCard, etc.
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── uploads/              # Temporary storage for uploaded resumes
├── venv/                 # Python Virtual Environment
├── .gitignore            # Excludes heavy and sensitive folders
├── package.json
└── package-lock.json
