"use client"
import { useState } from "react";
export default function Home() {
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-yellow-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div className="flex justify-center items-center">
          <div className="group">
            <div className=" flex relative justify-center w-2xl h-125 shadow-md bg-sky-900">
              {/* used ai for debugging drop shadow (issue with the clip-path) */}
              <div className="drop-shadow-md w-full h-80">
              {/* mozilla/mdn is used to reference how to do clip path, ai was used to debug to make the gradient bottom only */}
              <div className="bg-sky-900 opacity-70 w-full h-80 bg-gradient-to-b from-sky-800 to-sky-900 [clip-path:polygon(0_0,100%_0,50%_100%)]">
              </div>
              </div>
              <div className="absolute flex items-center z-0 justify-center rounded-full opacity-85 bg-cyan-700 w-20 h-20  translate-y-9/3 hover: ">
                <button onClick={() => setMessage("This mail is reserved for an exclusive person... By the way, what is your name? ")} className="text-5xl text-blue-100">
                  <h1 className="text-6xl z-40 font-stamp text opacity-100 -cyan-600">A</h1>
                  </button>
              </div>
            </div>
               <div className="flex justify-center w-full text-center ">
              {message && <p className="z-40 h-50 translate-y-20 text-black bg-white w-xl">{message}</p>}
              </div>
          </div>
        </div>
        {}
      </main>
    </div>
  );
}
