import React from "react";


const WordDisplay = ({ displayWord }) => {



    return (
        <div className="word-display">

            <>
                {/* Word */}
                <h2>{displayWord[0].word}</h2>


                <h3>Definitions</h3>
                {/* Definition 1 */}

                <p><b>{displayWord[0].meanings[0].partOfSpeech}</b> : {displayWord[0].meanings[0].definitions[0].definition} </p>
                {/* Definition 2 */}

                {displayWord[0].meanings.length > 1 &&
                    <p><b>{displayWord[0].meanings[1].partOfSpeech}</b>: {displayWord[0].meanings[1].definitions[0].definition}</p>
                }

                {/* Definition 3 */}
                {displayWord[0].meanings.length > 2 &&
                    <p><b>{displayWord[0].meanings[2].partOfSpeech}</b>: {displayWord[0].meanings[2].definitions[0].definition}</p>
                }


            </>



        </div>
    )
}

export default WordDisplay;