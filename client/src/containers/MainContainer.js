import React, { useEffect, useState } from "react";
import WordBox from "../components/WordBox";
import WordDisplay from "../components/WordDisplay";
import FavouritesList from "../components/FavouritesList";


const MainContainer = () => {

    const [displayWord, setDisplayWord] = useState([]);
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        setFavourites([])
    }, []);


    const searchWord = (word) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(result => result.json())
            .then(foundWord => setDisplayWord(foundWord))
    }

    const capitialize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const onClick = function (word) {
        setDisplayWord([word])
    }

    const addToFavourites = () => {
        console.log(displayWord[0]);
        const copyFavourites = [...favourites, displayWord[0]];
        setFavourites(copyFavourites);

    }


    return (

        <div className="main-container">
            <h1>GCU Dictionary App</h1>
            <WordBox searchWord={searchWord} />
            {displayWord.length > 0 ? <WordDisplay displayWord={displayWord} addToFavourites={addToFavourites} capitialize={capitialize} /> : null}
            <FavouritesList favourites={favourites} onClick={onClick} capitialize={capitialize} />

        </div>
    )
}

export default MainContainer;