import React, { useState } from "react";


const WordBox = ({ searchWord }) => {

    const [input, setInput] = useState("");

    const handleChange = (event) => {
        const inputText = event.target.value;
        setInput(inputText)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchWord(input)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }




    return (
        <div className="word-box">
            <p>Type a word and press Enter</p>
            <form onSubmit={submitHandler}>
                <input className="searchWord" onChange={handleChange} onKeyDown={handleKeyDown}
                    placeholder="Type a Word" type="text" value={input}>
                </input>
            </form>
        </div>
    )

}

export default WordBox;