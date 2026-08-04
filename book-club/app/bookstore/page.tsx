'use client'
import Image from 'next/image';
import { useState } from 'react';
const Icards = [
  {id: 1, bookId: 'stoner', title: 'Stoner', imgSrc:'/1stonerBook.jpg', isFlipped: false, isMatched: false},
  {id: 2, bookId: 'stoner', title: 'Stoner', imgSrc:'/1stonerBook.jpg', isFlipped: false, isMatched: false},
  {id: 3, bookId: 'bell-jar', title: 'The Bell Jar', imgSrc:'/theBellJar.jpg', isFlipped: false, isMatched: false},
  {id: 4, bookId: 'bell-jar', title: 'The Bell Jar', imgSrc:'/theBellJar.jpg', isFlipped: false, isMatched: false},
  {id: 5, bookId: 'ripley', title: 'The Talented Mr. Ripley', imgSrc:'/theTalentedMrRipley.jpg', isFlipped: false, isMatched: false},
  {id: 6, bookId: 'ripley', title: 'The Talented Mr. Ripley', imgSrc:'/theTalentedMrRipley.jpg', isFlipped: false, isMatched: false},
];

function mixArray(array){
  // referneced ai for this syntax (i didnt even know about ... before (but now i know lol))
  return[...array].sort(() => Math.random()-0.5);
}
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
       {/* used ai to refernce for the card loop (tried it at first but was really confused) */}
          <div className="flex items-center [perspective:1000px] justify-center mt-10 gap-4">
          {/* learned how to use the map function to go through arrays */}
          {cards.map((card) => (
            <div key={card.id} className='relative w-48 h-64'>
              <Image
              src={card.imgSrc}
              alt={card.title}
              width={200}
              height={300}
              className='w-full h-auto'
              />
            </div>
          ))}
        </div>
       
          
        {}
      </main>
    </div>
  );
}