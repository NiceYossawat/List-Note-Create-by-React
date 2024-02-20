import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
    const [items, setItem] = useState([])

    function addItems(inputText) {
        setItem((prevItems) => {
            return [...prevItems, inputText]
        })
    }
    function deleteItem(id) {
        setItem((prevItem) => {
            return prevItem.filter((item, index) => {
                return index !== id
            })
        })
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea
                onAdd={addItems}
            />
            <div>
                <ul>
                    {items.map((toItem, index) =>
                        <TodoItem
                            key={index}
                            id={index}
                            text={toItem}
                            onChecked={deleteItem}
                        />)}
                </ul>
            </div>
        </div>
    );
}

export default App;
