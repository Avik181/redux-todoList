import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, delTodo, removeTodo } from "../actions/index";

function App() {
  const [inputText, setInputText] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add item..."
          type="text"
          value={inputText}
        />
        <button onClick={() => dispatch(addTodo(inputText), setInputText(""))}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {list.map((elem) => {
          return (
            <div className="list" key={elem.id}>
              <h3>{elem.data}</h3>
              <button title="Delete" onClick={() => dispatch(delTodo(elem.id))}>
                <span>Delete</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
