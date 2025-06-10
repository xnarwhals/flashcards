import { useState } from 'react'
import './App.css'
import Flashcard from './Flashcard'
import CardData from './CardData'


//hint functionality later
function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHintVisible, setIsHintVisible] = useState(false);

  const currentCard = CardData[currentCardIndex];
  const totalCards = CardData.length;

  const handleArrowClick = (direction) => {
    // Must hide the card before changing the index
    setIsFlipped(false); // Reset flip state

    // no same card
    let randomCardIndex;
    do {
      randomCardIndex = Math.floor(Math.random() * totalCards);
    } while (randomCardIndex === currentCardIndex);

    setCurrentCardIndex(randomCardIndex); 

    // if (direction === 'left') {
    //   setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    // } else if (direction === 'right') {
    //   setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
    // }
  }

  return (
    <>
      <h1 className="title">Who's that Pokemon</h1>
      <button className="hint-btn" onClick={() => setIsHintVisible(!isHintVisible)}>
        Toggle Hints
      </button>
      <div className="info-area">
        <h2>Total Number of Cards is {totalCards}</h2>
        <p>Classic Pokemon guessing to help make sure you pass your Pokemon 101 college final!</p>
      </div>
      <div className="hint-area">
        <h2>Hint Area</h2>
        {isHintVisible && <p className="hint-text">{currentCard.hint}</p>}
        {!isHintVisible && <p className="hint-text">Click the button to reveal the hint!</p>}
      </div>
      <div className='container'>
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
          <button className="arrow left" onClick={() => handleArrowClick('left')}>←</button>
          <button className="arrow right" onClick={() => handleArrowClick('right')}>→</button>
        </div>
      </div>

    </>
  )
}

export default App
