import React, { useState } from "react";

export default function Add({ handleSaveBtn }) {
  // input state
  const [input, setInput] = useState("");

  function handleSave(e) {
    e.preventDefault();
    handleSaveBtn(input);
  }

  return (
    <div>
      <form onSubmit={handleSave}>
        <input
          type="text"
          placeholder="Please type a word/sequence separated by <em>comma"
          onChange={(e) => setInput(e.target.value)}
        />
        <button>SAVE</button>
      </form>
    </div>
  );
}
/////////////////////////////////////

/*import React, { useRef } from "react";

export default function Add({ handleSaveBtn }) {
  const toAddRef = useRef();

  function handleSave() {
    const saveInput = toAddRef.current.value;

    handleSaveBtn(saveInput);
  }

  return (
    <div>
      <h1>
        Please type a word/sequence separated by <em>comma</em>
      </h1>
      <input
        ref={toAddRef}
        type="text"
        placeholder="Please type a word/sequence separated by <em>comma"
      />
      <button onClick={handleSave}>SAVE</button>
    </div>
  );
}
*/
