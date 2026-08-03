import Image from 'next/image';
import { useState } from 'react';
const [game, startGame] = useState(false);
const [cardFlip, setCardsFlip] = useState(false)
export default function Home(){
  return (
    <div className="flex flex-1 items-center justify-center bg-yellow-50 font-sans">
      <main className="flex flex-1 flex-col w-full max-w-3xl  items-center justify-between py-32 px-16">
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-mono text-xl">Welcome! Which book would you like to purchase? (Remember you can only pick one these books!)</h3>
            </div>
      {/* used ai to learn abuot over-flow hidden and refenrced for the div structure (didnt know how to make all of these images the same size) */}
            <div className="flex items-center justify-center mt-4  gap-4">
          <div className="w-48 h-64 overflow-hidden">
            <Image
              src="/stonerBook.jpg"
              alt="Stoner Cover"
              width={200}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-48 h-64 overflow-hidden">
            <Image onClick={()=> startGame(true)}
              src="/theBellJar.jpg"
              alt="The Bell Jar Cover"
              width={200}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-48 h-64 overflow-hidden">
            <Image
              src="/theTalentedMrRipley.jpg"
              alt="The Talented Mr. Ripley Cover"
              width={200}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
       
          
        {}
      </main>
    </div>
  );
}