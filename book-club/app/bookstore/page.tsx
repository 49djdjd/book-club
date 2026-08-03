'use client'
import Image from 'next/image';
import { useState } from 'react';
const Icards = [
  {id: 1, bookId: 'stoner', title: 'Stoner', imgSrc:'/stonerBook.jpg', isFlipped: false, isMatched: false},
  {id: 2, bookId: 'stoner', title: 'Stoner', imgSrc:'/stonerBook.jpg', isFlipped: false, isMatched: false},
  {id: 3, bookId: 'bell-jar', title: 'The Bell Jar', imgSrc:'/theBellJar.jpg', isFlipped: false, isMatched: false},
  {id: 4, bookId: 'bell-jar', title: 'The Bell Jar', imgSrc:'/theBellJar.jpg', isFlipped: false, isMatched: false},
  {id: 5, bookId: 'ripley', title: 'The Talented Mr. Ripley', imgSrc:'/theTalentedMrRipley.jpg', isFlipped: false, isMatched: false},
  {id: 6, bookId: 'ripley', title: 'The Talented Mr. Ripley', imgSrc:'/theTalentedMrRipley.jpg', isFlipped: false, isMatched: false},
];
export default function Home(){
  const bookTitle = ["Stoner", "The Talented Mr. Ripley", "The Bell Jar"];
  const [game, startGame] = useState(false);
  const [cards, setCards] = useState(Icards);
  return (
    <div className="flex flex-1 items-center justify-center bg-yellow-50 font-sans">
      <main className="flex flex-1 flex-col w-full max-w-3xl  items-center justify-between py-32 px-16">
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-mono text-xl">Welcome! Which book would you like to purchase? (Remember you can only pick one these books!)</h3>
            </div>
      {/* used ai to learn abuot over-flow hidden and refenrced for the div structure (didnt know how to make all of these images the same size) */}
          <div className="flex items-center [perspective:1000px] justify-center mt-10 gap-4">
          <div className="relative overflow-hidden w-48 h-64 [transform-style:preserve-3d]">
            <Image
              src="/stonerBook.jpg"
              alt="Stoner Cover"
              width={200}
              height={300}
              className="w-full absolute inset-0 [backface-visibility:hidden] h-auto"
            />
            <div className={`bg-black absolute inset-0 ${setCards} ? '[transform-style:preserve-3d] [transform:rotateY(180deg)]':'[backface-visibility:hidden]'}`} ></div>
            
          </div>
          <div className="w-48 h-64 overflow-hidden hover:scale-120">
            <Image onClick={()=> startGame(true)}
              src="/theBellJar.jpg"
              alt="The Bell Jar Cover"
              width={200}
              height={300}
              className="w-full h-auto"
            />
          </div>
          <div className="w-48 h-64 overflow-hidden hover:scale-120">
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