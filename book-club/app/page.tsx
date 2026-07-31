"use client"
import { useState } from "react";
export default function Home() {
  const [username, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const [envelope, openEnvelope] = useState(false)
  const [envOpen, isEnvOpen] = useState(false)
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-yellow-50 font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
        <div className="flex justify-center items-center">
          <div className="group relative">
            <div className=" flex relative justify-center mt-50 w-2xl h-125 shadow-md bg-sky-900">
              {/* used ai for debugging drop shadow (issue with the clip-path) */}
              <div className="drop-shadow-md w-full h-80">
                <div>
              {/* mozilla/mdn is used to reference how to do clip path, ai was used to debug to make the gradient bottom only */}
              <div className={`flex items-center justify-center bg-sky-900 opacity-70- w-full h-80 bg-gradient-to-b from-sky-800 to-sky-900 origin-top transition-transform duration-500 [clip-path:polygon(0_0,100%_0,50%_100%)] ${envelope ? `-scale-y-100 opacity-100 z-10` : `scale-y-100 z-30`}`}>
              </div>
               <div className={`absolute flex items-center justify-center z-30 rounded-full opacity-85 bg-cyan-700 w-20 h-20  transition-transform duration-500 -translate-y-4/5 translate-x-11/3 ${envelope ? '-translate-y-160' : 'rotate-0'}`}>
                <button onClick={() => setMessage("STOP! Do not read! This mail is reserved for a special person... By  the way, what is your name? ")} className="text-5xl text-blue-100 ">
                  <h1 className="text-6xl z-20 font-stamp text opacity-100 -cyan-600">A</h1>
                  </button>
              </div>
              </div>
              {/* referenced ai for the syntax of swithching tailwind based on states */}
              <div className={`bg-white -translate-y-2/3 text-black font-mono z-30 translate-x-1/12 w-xl transition-transform duration-500 h-100 ${envelope ? `opacity-100 -translate-y-[90%]` : `opacity-0 -translate-y-2/3` }`}>
              <h1>Dear {username}, </h1>
              <br></br>
              <p>(not sure what to do..)You are invited to our exclusive book club! We are going to be having a meeting later today, please come ready with the book fully read AND annotated so that we may have a proper discussion! This will determine your future standing within the club...</p>

              </div>
              <div className="relative flex items-center justify-center bg-sky-900 opacity-40 w-full h-56 bg-gradient-to-b from-sky-800 to-sky-900 origin-top transition-transform duration-500 -translate-y-[210%] [clip-path:polygon(50%_0,100%_100%,0_100%)]"></div>
              <div className="relative flex items-center justify-center bg-orange-900 opacity-100 w-85 h-125 origin-top transition-transform duration-500 -translate-y-[188.75%] translate-x-[97.75%] [clip-path:polygon(0_50%,100%_0,100%_100%)]"></div>
               <div className="relative flex items-center justify-center bg-orange-900 opacity-100 w-85 h-125 origin-top transition-transform duration-500 -translate-y-[288.75%] [clip-path:polygon(0_0,100%_50%,0_100%)]"></div>
              
              </div>
              
              {/* used ai to figure out what inset 0 was and how to use it (was not centering for the life of me...) also i did message on the outside to make sure it was clickable */}
              {message && (
                <div className="absolute items-center inset-0 flex justify-center  ">
                  <div className="bg-white p-8 justify-center font-mono text-center flex w-xl items-center">
                    {/* referneced ai on how to work the handle submit (i didnt know how to make it based on enter (but i do now!)) */}
                    <p className="z-40 text-xl w-lg text-black">{message} <br></br> <form onSubmit={(e) => {
                      e.preventDefault(); if(username.trim()){
                        setMessage(`Wait a minute! You are the ${username}?!? This message is for you! :P`);
                        setSubmit(true);
                      }
                      }
                    }>
                    {!submit ? (
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="bg-stone-100 mt-2 hover:bg-stone-200"></input> 
                    ):(
                      <button onClick={()=> { setMessage(""); openEnvelope(true); }} className="text-sm rounded-sm bg-stone-100 mt-4 p-2 text-gray">Close</button>
                    )}
                    </form> </p>
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
