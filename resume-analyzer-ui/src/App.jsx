import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadBox from "./components/UploadBox";
import JobDescription from "./components/JobDescription";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultCard from "./components/ResultCard";
import Login from "./components/Login";

function App() {
  const [currentView, setCurrentView] = useState("home"); // "home" or "login"
  const [user, setUser] = useState(null);

  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);

  // If user clicks login, render the Login page view
  if (currentView === "login") {
    return (
      <Login 
        onLoginSuccess={(userData) => {
          setUser(userData);
          setCurrentView("home");
        }} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar 
        user={user} 
        onLoginClick={() => setCurrentView("login")} 
      />

      <Hero />

      <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
        <UploadBox setFile={setFile} />

        <JobDescription 
          jobDesc={jobDesc}
          setJobDesc={setJobDesc}
        />

        <AnalyzeButton 
          file={file}
          jobDesc={jobDesc}
          setResult={setResult}
        />

        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;