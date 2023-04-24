import React, { useRef, useState } from "react";

export default function Search({ handleSearchBtn }) {
  // search state
  const [input, setInputSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    handleSearchBtn(input);
  }

  return (
    <div>
      <h1>Please type a word</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Please type a word"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button>SEARCH</button>
      </form>
    </div>
  );
}

////////////////////
/*
export default function Search({ handleSearchBtn }) {
  const toSearchRef = useRef();

  function handleSearch() {
    const searchInput = toSearchRef.current.value;
    handleSearchBtn(searchInput);
  }

  return (
    <div>
      <h1>Please type a word</h1>
      <input ref={toSearchRef} type="text" placeholder="Please type a word" />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
}
*/
