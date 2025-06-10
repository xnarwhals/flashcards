import './index.css';
import {useState} from 'react';


// hint functionality in a different component 
// flip animation via perspective 
const Flashcard = ({hiddenImg, revealedImg, name, isFlipped, setIsFlipped, pokedexEntry, difficulty}) => {
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card-content" style={{'--card-bg-color' : difficulty}}>
                {!isFlipped ? (
                    <div className="front">
                        <h2>???</h2>
                        <p>Click to reveal the Pokemon!</p>
                        <img src={hiddenImg} alt={name} className="revealed" />
                    </div>
                ) : (
                    <div className="back">
                        <h2>{name}</h2>
                        <p>{pokedexEntry}</p>
                        <img src={revealedImg} alt={name} className="hidden" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Flashcard;