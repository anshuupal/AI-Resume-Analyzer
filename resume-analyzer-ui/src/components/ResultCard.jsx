import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function ResultCard({ result }) {

  if (!result) return null;


  const getStatus = (score) => {

    if (score >= 90) {
      return {
        text: "🟢 Excellent Match",
        color: "text-green-600"
      };
    }

    if (score >= 70) {
      return {
        text: "🟡 Good Match",
        color: "text-yellow-600"
      };
    }

    if (score >= 50) {
      return {
        text: "🟠 Needs Improvement",
        color: "text-orange-600"
      };
    }

    return {
      text: "🔴 Poor Match",
      color: "text-red-600"
    };

  };


  const status = getStatus(result.ats_score);


  return (

    <div className="max-w-5xl mx-auto mt-10 bg-white rounded-2xl shadow-xl p-8">


      <h2 className="text-3xl font-bold text-center mb-10">
        Resume Analysis Result
      </h2>



      <div className="grid md:grid-cols-2 gap-10">



        {/* ATS SCORE */}

        <div className="flex flex-col items-center">


          <div className="w-44 h-44">

            <CircularProgressbar

              value={result.ats_score}

              text={`${result.ats_score}%`}

              styles={buildStyles({

                pathColor:
                  result.ats_score >= 70
                    ? "#16a34a"
                    : "#dc2626",

                trailColor: "#e5e7eb",

                textColor: "#1f2937",

                textSize: "18px"

              })}

            />

          </div>



          <p className={`mt-5 text-xl font-bold ${status.color}`}>

            {status.text}

          </p>




          <div className="mt-6 bg-gray-100 rounded-xl p-4 w-full">


            <p className="text-gray-500 text-sm">
              Uploaded Resume
            </p>


            <p className="font-semibold mt-1">
              📄 {result.filename}
            </p>


          </div>


        </div>






        {/* SKILLS */}

        <div>



          {/* MATCHED SKILLS */}

          <h3 className="text-xl font-bold text-green-600 mb-4">

            ✅ Matched Skills

          </h3>



          <div className="flex flex-wrap gap-3 mb-8">


            {

              result.matched_skills.length > 0 ?

              (

                result.matched_skills.map((skill,index)=>(

                  <span

                    key={index}

                    className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium"

                  >

                    {skill}

                  </span>


                ))

              )

              :

              (

                <p>
                  No matching skills
                </p>

              )

            }


          </div>






          {/* MISSING SKILLS */}


          <h3 className="text-xl font-bold text-red-600 mb-4">

            ❌ Missing Skills

          </h3>




          <div className="flex flex-wrap gap-3">


            {

              result.missing_skills.length > 0 ?

              (

                result.missing_skills.map((skill,index)=>(

                  <span

                    key={index}

                    className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-medium"

                  >

                    {skill}

                  </span>


                ))

              )

              :

              (

                <p>
                  No missing skills 🎉
                </p>

              )

            }


          </div>





        </div>


      </div>







      {/* AI SUGGESTIONS */}


      <div className="mt-10">


        <h3 className="text-xl font-bold text-blue-600 mb-4">

          💡 Suggestions

        </h3>



        <div className="space-y-3">


          {

            result.suggestions && result.suggestions.length > 0 ?

            (

              result.suggestions.map((item,index)=>(

                <div

                  key={index}

                  className="bg-blue-50 border border-blue-200 p-4 rounded-xl"

                >

                  {item}

                </div>


              ))

            )

            :

            (

              <p>
                No suggestions available
              </p>

            )

          }


        </div>


      </div>




    </div>

  );

}


export default ResultCard;