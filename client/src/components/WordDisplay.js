import React from "react";


const WordDisplay = ({ displayWord, addToFavourites, capitialize }) => {



    return (
        <div className="word-display">

            <>
                {/* Word */}
                <h2>{capitialize(displayWord[0].word)}</h2>


                <h3>Definitions</h3>
                {/* Definition 1 */}

                <p><b>{capitialize(displayWord[0].meanings[0].partOfSpeech)}</b> : {capitialize(displayWord[0].meanings[0].definitions[0].definition)} </p>
                {/* Definition 2 */}

                {displayWord[0].meanings.length > 1 &&
                    <p><b>{capitialize(displayWord[0].meanings[1].partOfSpeech)}</b>: {capitialize(displayWord[0].meanings[1].definitions[0].definition)}</p>
                }

                {/* Definition 3 */}
                {displayWord[0].meanings.length > 2 &&
                    <p><b>{capitialize(displayWord[0].meanings[2].partOfSpeech)}</b>: {capitialize(displayWord[0].meanings[2].definitions[0].definition)}</p>
                }
                <button onClick={addToFavourites}>Add to Favourites</button>


            </>
        </div>
    )
}

export default WordDisplay;