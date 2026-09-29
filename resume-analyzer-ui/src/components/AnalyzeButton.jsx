import axios from "axios";

function AnalyzeButton({ file, jobDesc, setResult }) {

  const analyzeResume = async () => {

    if (!file) {
      alert("Please upload your resume.");
      return;
    }

    if (!jobDesc.trim()) {
      alert("Please enter a job description.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDesc);

    try {
      console.log("Sending request...");

      const response = await axios.post(
        "http://127.0.0.1:8000/upload-resume",
        formData
      );

      console.log("Response received:");
      console.log(response);

      console.log("Response data:");
      console.log(JSON.stringify(response.data, null, 2));

      setResult(response.data);

    } catch (error) {
      console.log("ERROR:");
      console.error(error);
      alert("Backend request failed.");
    }

  };

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={analyzeResume}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold"
      >
        Analyze Resume 🚀
      </button>
    </div>
  );
}

export default AnalyzeButton;