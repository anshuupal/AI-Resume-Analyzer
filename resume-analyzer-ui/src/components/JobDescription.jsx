function JobDescription({ jobDesc, setJobDesc }) {

  return (
    <div className="mt-8 max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

      <h2 className="text-2xl font-bold mb-5">
        Job Description
      </h2>

      <textarea
        rows="8"
        value={jobDesc}
        onChange={(e)=>setJobDesc(e.target.value)}
        placeholder="Paste job description here..."
        className="w-full border rounded-xl p-4"
      />

    </div>
  );
}

export default JobDescription;