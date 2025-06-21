import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard'
import CardData from './CardData'
import ConfettiExplosion from 'react-confetti-explosion';

// This became a beefy file, would be good to refactor as a learning experience

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);  
  const [shuffledCards, setShuffledCards] = useState(CardData); 

  const [isFlipped, setIsFlipped] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);

  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const [showConfetti, setShowConfetti] = useState(false);
  const [showRumble, setShowRumble] = useState(false);

  const [removedCards, setRemovedCards] = useState([]); 
  
  // inital order is based on order I put them in CardData.js
  const currentCard = shuffledCards[currentCardIndex]; // note that its not actually shuffled until the first shuffle button click
  let totalCards = shuffledCards.length;

  const handleRemoveCard = () => {
    if (totalCards <= 1) {
      alert("No, don't do that");
      return;
    }
    
    const newCards = shuffledCards.filter((_, index) => index !== currentCardIndex);
    setShuffledCards(newCards);
    setRemovedCards([...removedCards, currentCard.name]); 
    
    if (currentCardIndex >= newCards.length) setCurrentCardIndex(newCards.length - 1);
    setIsFlipped(false);
  }

  const handleGuessSubmit = (guess) => {
    // case insensitive comparison
    if (guess.toLowerCase() === currentCard.name.toLowerCase() && !isFlipped) {
      // alert('Correct!');
      const newCurrentStreak = currentStreak + 1;
      setCurrentStreak(newCurrentStreak);
      setLongestStreak(Math.max(longestStreak, newCurrentStreak));
      setIsFlipped(true);

      // fun confetti explosion
      setShowConfetti(false); 
      setTimeout(() => setShowConfetti(true), 10);

    } else if (isFlipped) {
      alert("No Cheating!");
      setIsFlipped(false);
    } else {
      setCurrentStreak(0); 
      setIsFlipped(false);

      // wrong answer rumble
      setTimeout(() => setShowRumble(true), 10);
      setTimeout(() => setShowRumble(false), 500);
    }
  }

  const handleArrowClick = (direction) => {
    setIsFlipped(false); // cards stay hidden when switching cards

    // Random generation
    // let randomCardIndex;
    // do {
    //   randomCardIndex = Math.floor(Math.random() * totalCards);
    // } while (randomCardIndex === currentCardIndex);
    // setCurrentCardIndex(randomCardIndex); 

    // no wrap around
    if (direction === 'left') {
      setCurrentCardIndex(currentCardIndex - 1);
    } else if (direction === 'right') {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  }

  return (
    <>
      <h1 className="title">Who's that Pokemon</h1>
      <button className="hint-btn" onClick={() => setIsHintVisible(!isHintVisible)}>
        Toggle Hints
      </button>
      <button className="shuffle-btn" onClick={() => {
        const shuffled = [...shuffledCards].sort(() => Math.random() - 0.5); // I dont want to use Fisher-Yates shuffle here
        setShuffledCards(shuffled);
        setCurrentCardIndex(0);
        setIsFlipped(false);
      }}>
        Shuffle Cards
      </button>
      <div className="info-area">
        <h2>Total Number of Cards is {totalCards}</h2> <br />
        <p>Classic Pokemon guessing to help make sure you pass your Pokemon 101 college final!</p> <br />
        <p style={{fontWeight: "bold"}}>Current Streak: {currentStreak}</p>
        <p style={{fontWeight: "bold"}}>Longest Streak: {longestStreak}</p>
        <button className='remove-card-btn'
          onClick={handleRemoveCard}
        >Remove Card</button>
        <p>Mastered Cards: {removedCards.join(', ')}</p>
      </div>
      <div className="hint-area">
        <h2>Hint Area</h2>
        {isHintVisible && <p className="hint-text">{currentCard.hint}</p>}
        {!isHintVisible && <p className="hint-text">Click the button to reveal the hint!</p>}
      </div>
      <div className={`container ${showRumble ? 'rumble' : ''}`}>
        {showConfetti && <ConfettiExplosion duration={3000} particleCount={200} />}
        <Flashcard
          hiddenImg={currentCard.hiddenImg}
          revealedImg={currentCard.revealedImg}
          name={currentCard.name}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
          pokedexEntry={currentCard.pokedexEntry}
          difficulty={currentCard.color}
        />
        <div className="arrows">
          <button className="arrow left" disabled={currentCardIndex === 0} onClick={() => handleArrowClick('left')}>←</button>
          <input type='text' className='guess-input' placeholder='Type your guess here!' />
          <button className="arrow right" disabled={currentCardIndex === totalCards - 1} onClick={() => handleArrowClick('right')}>→</button>
        </div>
      </div>
      <button className='submit-guess-btn'
        onClick={() => {
          const guessInput = document.querySelector('.guess-input');
          handleGuessSubmit(guessInput.value);
          guessInput.value = ''; 
        }}
      >
        Submit Guess
      </button>
    </>
  )
}

export default App
