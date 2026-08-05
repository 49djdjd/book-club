'use client'
import Image from 'next/image';
import { useState } from 'react';
const Icards = [
  {id: 1, bookId: 'stoner', title: 'Stoner', imgSrc:'/1stonerBook.jpg', isFlipped: true, isMatched: false},
  {id: 2, bookId: 'bell-jar', title: 'The Bell Jar', imgSrc:'/theBellJar.jpg', isFlipped: true, isMatched: false},
  {id: 3, bookId: 'ripley', title: 'The Talented Mr. Ripley', imgSrc:'/theTalentedMrRipley.jpg', isFlipped: true, isMatched: false},
];

function mixArray<T>(array:T[]) : T[]{
  // referneced ai for this syntax (i didnt even know about ... before (but now i know lol))
  return[...array].sort(() => Math.random()-0.5);
}
export default function Home(){
  const bookTitle = ["Stoner", "The Talented Mr. Ripley", "The Bell Jar"];
  const [game, startGame] = useState(false);
  const [cards, setCards] = useState(Icards);
  function clickCard(clickedCard : {id: number; bookId: string; title: string; imgSrc: string; isFlipped: boolean; isMatched: boolean;}){
  if(!game){
    if(clickedCard.bookId == 'bell-jar'){
      // used ai to know how to strucutre this line (but was able to implement everything myself!)
      setCards(mixArray(cards).map(card => ({...card, isFlipped:false})));
      startGame(true);
    }
    return;
  }
    // this is because react has immutable states
      setCards(prevCards => {
        return prevCards.map(card => {
          if(card.id == clickedCard.id){
            return{...card, isFlipped: false}
          }
          else{
            return card;
          }
          });
        });
      }
  return (
    <div className="flex flex-1 items-center justify-center bg-yellow-50 font-sans">
      <main className="flex flex-1 flex-col w-full max-w-3xl  items-center justify-between py-32 px-16">
        <div className="flex flex-col justify-center items-center">
            <h3 className="text-black font-mono text-xl">Welcome! Which book would you like to purchase? (Remember you can only pick one these books!)</h3>
            </div>
       {/* used ai to refernce for the card loop (tried it at first but was really confused) */}
          <div className="flex items-center [perspective:1000px] justify-center mt-10 gap-4">
          {/* learned how to use the map function to go through arrays and what key was*/}
          {cards.map((card) => (
            <div key={card.id} onClick={() => clickCard(card)} className='relative cursor-pointer  w-48 h-64'>
            {card.isFlipped ? (
              <Image
              src={card.imgSrc}
              alt={card.title}
              width={200}
              height={300}
              className='w-full h-auto'
              />

            ) : (
           <div className='w-full h-full bg-stone-400'></div>
            )}
            </div>
          ))}
        </div>
       
          
        {}
      </main>
    </div>
  );
}