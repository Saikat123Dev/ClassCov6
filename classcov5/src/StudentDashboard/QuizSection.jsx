
import { FiAirplay } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { CgPlayListCheck } from "react-icons/cg";


function QuizSection() {
  return (
    <>
    <a href="quizz">
      <h1 className="bg-[#161616] flex  p-5 rounded-t-lg   text-white text-4xl">
        Quiz Section
      </h1>
      <div className="bg-[#313131">
        <hr/>
      </div>
      <div className="bg-[#161616] h-screen text-xl pt-5 text-white">
        <h1 className="ml-7 text-3xl ">Participate a quiz or poll</h1>
        <h1 className="ml-7">Visualixe student enguagement and quiz result</h1>
        <h1 className="mt-8 ml-7  text-green-700 text-3xl font-bold">
          Quizes & Polls Dashboard
        </h1>
        <div className=" rounded-3xl ml-3 mr-3">
          <div className="   bg-[#313131]  rounded-3xl font-bold ">
            <div className="grid grid-cols-3 grid-rows-1 ml-5 space-x-7 ">
              <div>
                <div className="grid grid-cols-1 grid-rows-3 mt-2 mb-2 rounded-lg justify-center">
                  <div className="flex justify-center "><FiAirplay /></div>
                  <div className="flex justify-center">50</div>
                  <div className=" flex justify-center">
                    Quizzes Participated
                  </div>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-1 grid-rows-3 gap-0 rounded-lg  mt-2 mb-2">
                  <div className=" flex justify-center "><FiBarChart2 /></div>
                  <div className=" flex justify-center">500</div>
                  <div className=" flex justify-center">Polls Attended</div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 grid-rows-3 gap-0 rounded-lg mr-5 mt-2 mb-2">
                  <div className=" flex justify-center"><CgPlayListCheck /></div>
                  <div className=" flex justify-center">10</div>
                  <div className=" flex justify-center">
                    Statistics generated
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="ml-7 mt-12">
            <h1 className="text-2xl font-bold">1.The metal whose salts are sensitive to light is?</h1>

            <div className="grid grid-cols-4 grid-rows-1 gap-4 space-x-8 ml-7 mr-6">
              <div>
                <label>
                  <input type="checkbox" /> Zinc
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Silver
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Copper
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Aluminum
                </label>
              </div>
            </div>
          </div>
          <div className="ml-7 mt-12">
            <h1 className="font-bold text-2xl">2.Who among the following wrote Sanskrit grammar?</h1>

            <div className="grid grid-cols-4 grid-rows-1 gap-4 space-x-8 ml-7 mr-6">
              <div>
                <label>
                  <input type="checkbox" /> Kalidasa
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Charak
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Panini
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Aryabhatt
                </label>
              </div>
            </div>
          </div>
          <div className="ml-7 mt-12">
            <h1 className="font-bold text-xl">3.The country that has the highest in Barley Production?</h1>

            <div className="grid grid-cols-4 grid-rows-1 gap-4 space-x-8 ml-7 mr-6">
              <div>
                <label>
                  <input type="checkbox" /> China
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> India
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Russia
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> France
                </label>
              </div>
            </div>
          </div>
          <div className="ml-7 mt-12">
            <h1 className="text-2xl font-bold">4.The hottest planet in the solar system? </h1>

            <div className="grid grid-cols-4 grid-rows-1 gap-4 space-x-8 ml-7 mr-6">
              <div>
                <label>
                  <input type="checkbox" /> Mercury
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />Venus
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" />Mars
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox" /> Jupiter
                </label>
              </div>
            </div>
          </div>

        <div className="  mt-14 flex flex-wrap justify-center bottom-12 inset-x-0 px-10">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl">
        </div>
      </div>
      </div>
      </a>
    </>
  );
}

export default QuizSection;
