import React, { useState } from "react";
import WordBox from "../components/WordBox";
import WordDisplay from "../components/WordDisplay";


const MainContainer = () => {

    const [displayWord, setDisplayWord] = useState([]);


    const searchWord = (word) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(result => result.json())
            .then(foundWord => setDisplayWord(foundWord))
    }


    return (

        <div className="main-container">
            <h1>GCU Dictionary App</h1>
            <WordBox searchWord={searchWord} />
            <WordDisplay displayWord={displayWord} />
            {/* <FavouritesList /> */}

        </div>
    )
}

export default MainContainer;