import Image from "next/image";

import redscum from "../images/redscum_front.jpg";
import ping from "../images/pingpang_front.jpg";
import cowbell from "../images/dangerouscowbel_front.jpg";

export default function Home() {
  return (
    <>

      <h1 className="font-Quicksand font-bold text-center mt-20 text-5xl text-gray-800">
        A story about anything...
      </h1>


      <div className="flex justify-center mt-12 space-x-8">
   
        <div className="text-center -rotate-6">
          <div className="bg-white border rounded-lg shadow-lg p-4">
            <Image
              src={redscum}
              alt="Red Scum Cover"
              className="rounded-lg"
              width={300}
              height={300}
            /> 
            <p className="font-Quicksand text-lg font-semibold mt-2 text-gray-800">
            Message from Mars
          </p>
          </div>
         
        </div>


        <div className="text-center rotate-12">
          <div className="bg-white border rounded-lg shadow-lg p-4">
            <Image
              src={ping}
              alt="Ping Pang Cover"
              className="rounded-lg"
              width={300}
              height={300}
            />
            <p className="font-Quicksand text-lg font-semibold mt-2 text-gray-800">
            No empathy
          </p>
          </div>
          
        </div>


        <div className="text-center rotate-3">
          <div className="bg-white border rounded-lg shadow-lg p-4 ">
            <Image
              src={cowbell}
              alt="Cowbell Cover"
              className="rounded-lg"
              width={300}
              height={300}
            />
            <p className="font-Quicksand text-lg font-semibold mt-2 text-gray-800">
            Floating in space
          </p>
          </div>
          
        </div>
      </div>


      <footer className="text-center mt-80 text-gray-500">
        Font: Quicksand | Background Color: #fcfff5
      </footer>
    </>
  );
}
