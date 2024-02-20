import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setText] = useState("")
    function handleChange(event) {
        const newValue = event.target.value
        setText(newValue)
    }
    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={() =>{
                props.onAdd(inputText)
                setText("")
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea;
