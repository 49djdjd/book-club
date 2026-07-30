import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex justify-center items-center">
          <div className="group">
            <div className=" flex relative justify-center w-2xl h-125  bg-sky-900">
              <div className="drop-shadow-md w-full h-80">
              {/* mozilla/mdn is used to reference how to do clip path */}
              <div className="bg-sky-900 opacity-70 w-full h-80 bg-gradient-to-b from-sky-800 to-sky-900 [clip-path:polygon(0_0,100%_0,50%_100%)]">
              </div>
              </div>
              <div className="absolute flex items-center z-0 justify-center rounded-full opacity-85 bg-cyan-700 w-20 h-20 font-stamp translate-y-9/3 ">
                <h1 className="text-6xl z-40 text opacity-100 -cyan-600">A </h1>
              </div>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
