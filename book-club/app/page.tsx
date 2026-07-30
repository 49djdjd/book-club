"use client"
import { useState } from "react";
export default function Home() {
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-yellow-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div className="flex justify-center items-center">
          <div className="group relative">
            <div className=" flex relative justify-center w-2xl h-125 shadow-md bg-sky-900">
              {/* used ai for debugging drop shadow (issue with the clip-path) */}
              <div className="drop-shadow-md w-full h-80">
              {/* mozilla/mdn is used to reference how to do clip path, ai was used to debug to make the gradient bottom only */}
              <div className="bg-sky-900 opacity-70 w-full h-80 bg-gradient-to-b from-sky-800 to-sky-900 [clip-path:polygon(0_0,100%_0,50%_100%)]">
              </div>
              </div>
              <div className="absolute flex items-center z-0 justify-center rounded-full opacity-85 bg-cyan-700 w-20 h-20  translate-y-9/3 hover: ">
                <button onClick={() => setMessage("STOP! Do not read! This mail is reserved for a special person... By  the way, what is your name? ")} className="text-5xl text-blue-100">
                  <h1 className="text-6xl z-40 font-stamp text opacity-100 -cyan-600">A</h1>
                  </button>
              </div>
              {/* used ai to figure out what inset 0 was and how to use it (was not centering for the life of me...) also i did message on the outside to make sure it was clickable */}
              {message && (
                <div className="absolute items-center inset-0 flex justify-center ">
                  <div className="bg-white p-8 justify-center font-mono text-center flex w-xl items-center">
                    <p className="z-50 text-xl w-lg text-black">{message} <br></br> <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="bg-stone-100 mt-2 hover:bg-stone-200"></input></p>
                    {/* used ai to double check for the syntax of the on change */}
                    
                    </div>
                </div>
              )}
            </div>
               
          </div>
        </div>
        {}
      </main>
    </div>
  );
}
