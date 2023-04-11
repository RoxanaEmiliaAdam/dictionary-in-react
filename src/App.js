import React, { useState, useRef } from "react";

// ID variable for each list element
let nextID = 0;

function App() {
  // state for creating a saved words list
  const [list, setList] = useState([]);

  // create a ref to save the input from save button
  const toAddRef = useRef();
  // create a ref to save user input from search button
  const toSearchRef = useRef();

  // SAVE btn

  function handleSaveBtn() {
    // reading the input value
    const addInput = toAddRef.current.value.split(",");
    console.log(addInput);
    // mapping through input array and adding each element to the list state
    addInput.map((word) =>
      setList((prevWord) => {
        return [...prevWord, { id: nextID++, word: word.toLowerCase() }];
      })
    );
  }

  // SEARCH btn

  function handleSearchBtn() {
    // reading the input value
    let searchInput = toSearchRef.current.value;

    //mapping through the list and check for input match
    list
      .filter((item) => item.word === searchInput.toLowerCase())
      .map((filteredItem) =>
        alert(`This word '${searchInput.toLowerCase()}' is already on the list`)
      );

    // list.filter((word) => {
    //   if (word.word.toLowerCase() === searchInput.toLowerCase()) {
    //     return alert(`This word '${searchInput}' is already on the list`);
    //   } else return alert(`This word '${searchInput}' is not yet on the list`);
    // });
  }

  return (
    <>
      <div>
        <h1>
          Please type a word/sequence separated by <em>comma</em>
        </h1>
        <input
          ref={toAddRef}
          type="text"
          placeholder="Please type a word/sequence separated by <em>comma"
        />
        <button onClick={handleSaveBtn}>SAVE</button>
      </div>

      <div>
        <h1>Please type a word</h1>
        <input ref={toSearchRef} type="text" placeholder="Please type a word" />
        <button onClick={handleSearchBtn}>SEARCH</button>
      </div>

      <div>
        <h1>LIST:</h1>
        <ul>
          {list.map((word) => (
            <li key={word.id}>{word.word}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
