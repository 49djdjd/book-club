'use client'
import { motion } from 'framer-motion';
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
  const[flipBack, setFlipBack] = useState(false);
  const [cards, setCards] = useState(Icards);
  function clickCard(clickedCard : {id: number; bookId: string; title: string; imgSrc: string; isFlipped: boolean; isMatched: boolean;}){
  if(!game){
    if(clickedCard.bookId == 'bell-jar'){
      // used ai to know how to strucutre this line (but was able to implement everything myself!)
      setCards(mixArray(cards).map(card => ({...card, isFlipped:false})));
      shuffle();
      startGame(true);
    }
    return;
  }
  function shuffle(){
    let counts = 0;
    const timer = setInterval(() => {
      setCards((prevCards) => mixArray(prevCards));
      counts++;
      if (counts > 6){
        clearInterval(timer);
      }
  }, 500);
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
          <div className="flex items-center [perspective:1000px] justify-center mt-10 gap-10">
          {/* learned how to use the map function to go through arrays and what key was*/}
          {cards.map((card) => (
            <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }} key={card.id} onClick={() => clickCard(card)} className='relative cursor-pointer [perspective:1000px] w-48 h-70'>
              {/* referneced ai for syntax but plugged everything in myself for flipping */}
            <motion.div className="w-full h-full relative [transform-style:preserve-3d]" animate={{ rotateY: card.isFlipped ? 0 : 180 }} transition={{ duration: 0.9 }}>
              <Image
              src={card.imgSrc}
              alt={card.title}
              fill
              className='w-full object-cover h-auto' 
              />
           <div onClick={() => setFlipBack(true)} className='w-full h-full bg-stone-400 absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]'></div>
            </motion.div>
            </motion.div>
          ))}
        </div>
       

          
        {}
      </main>
    </div>
  );
}