import React from "react";



const FavouritesListItem = ({ favourite, onClick, capitialize }) => {

    const handleClick = () => {
        onClick(favourite)
    }



    return (
        <>
            <li onClick={handleClick}>{capitialize(favourite.word)} </li>


        </>
    )
};

export default FavouritesListItem;