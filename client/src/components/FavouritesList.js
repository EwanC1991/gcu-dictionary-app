import React from "react";
import FavouritesListItem from "./FavouritesListItem";


const FavouritesList = ({ favourites, onClick, capitialize }) => {

    const favouriteNodes = favourites.map((favourite, index) => {
        return <FavouritesListItem favourite={favourite} key={index} onClick={onClick} capitialize={capitialize} />
    })


    return (

        <div className="favourites-list">
            <h2>Favourite Words</h2>
            <p>Click on a word to see it's definition</p>
            <ul>
                {favouriteNodes}
            </ul>


        </div>
    )
}

export default FavouritesList;