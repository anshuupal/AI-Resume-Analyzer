import { useState } from "react";

function UploadBox({ setFile }) {

  const [fileName, setFileName] = useState("");

  function handleFile(e) {

    const file = e.target.files[0];

    console.log("Selected file:", file);

    if (file) {
      setFile(file);
      setFileName(file.name);
    }
  }


  return (
    <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Upload Your Resume
      </h2>


      <label
        htmlFor="resume-upload"
        className="
          cursor-pointer
          border-2
          border-dashed
          border-blue-400
          rounded-2xl
          p-10
          flex
          flex-col
          items-center
          justify-center
          hover:bg-blue-50
          transition
        "
      >

        <div className="text-5xl mb-4">
          📄
        </div>


        <p className="text-lg font-semibold text-gray-700">
          Click to upload your resume PDF
        </p>


        <p className="text-sm text-gray-400 mt-2">
          Supported format: PDF
        </p>


        <input
          id="resume-upload"
          name="resume"
          type="file"
          accept=".pdf"
          onChange={handleFile}
          className="hidden"
        />

      </label>


      {fileName && (
        <div className="mt-5 flex items-center gap-3 bg-green-50 p-4 rounded-xl">

          <span className="text-xl">
            ✅
          </span>

          <div>
            <p className="font-semibold text-green-700">
              Resume Uploaded
            </p>

            <p className="text-sm text-gray-600">
              {fileName}
            </p>
          </div>

        </div>
      )}


    </div>
  );
}

export default UploadBox;