import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import Search from "./components/Search";
import Counter from "./components/Counter";
import Color from "./components/Color";
import Sum from "./components/Sum";

function App() {
  // state for creating a saved words list
  const [list, setList] = useState([]);

  // state for message
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("use effect triggered");
  }, []);

  useEffect(() => {
    console.log("state change");
  }, [list]);

  function handleSaveBtn(input) {
    setList((word) => [...word, { word: input.toLowerCase() }]);
  }

  function handleSearchBtn(input) {
    const isFound = list.find(
      (element) => input.toLowerCase() === element.word.toLowerCase()
    );

    if (isFound) {
      setMessage("This word is already on the list");
    }
    if (!isFound) {
      setMessage("Not on the list");
    }
  }

  return (
    <>
      <Color />
      <Add handleSaveBtn={handleSaveBtn} />
      <Search handleSearchBtn={handleSearchBtn} />

      <div className="list">
        <h1>LIST:</h1>
        <ul>
          {list.map((word, index) => (
            <li key={index}>{word.word}</li>
          ))}
        </ul>
      </div>
      {message}

      <Counter />
      <Sum n1={2} n2={3} />
      <Sum n1={4} n2={6} />
    </>
  );
}

/*
function App() {
  // ID variable for each list element
  let nextID = 0;

  // state for creating a saved words list
  const [list, setList] = useState([]);

  // search state
  const [message, setMessage] = useState("");

  // SAVE btn

  function handleSaveBtn(input) {
    // use the input value

    const addInput = input.split(",");
    console.log(addInput);
    // mapping through input array and adding each element to the list state
    addInput.map((word) =>
      setList((prevWord) => {
        return [...prevWord, { id: nextID++, word: word.toLowerCase() }];
      })
    );
  }

  // SEARCH btn

  function handleSearchBtn(inputSearch) {
    const isFound = list.find((element) => inputSearch === element.word);

    if (isFound) {
      setMessage("This word is already on the list");
    }
    if (!isFound) {
      setMessage("Not on the list");
    }
  }

  return (
    <>
      <Add handleSaveBtn={handleSaveBtn} />

      <Search handleSearchBtn={handleSearchBtn} />

      <div>
        <h1>LIST:</h1>
        <ul>
          {list.map((word) => (
            <li key={word.id}>{word.word}</li>
          ))}
        </ul>
      </div>

      {message}
    </>
  );
}
*/
export default App;
