import React, { useState } from "react";
import axios from "axios";
import "./Dictionary1.css";

export default function Dictionary1() {
  let [keyword, setKeyword] = useState("null");
  function handleResponse(response) {
    
  }
  function search(event) {
    event.preventDefault();

    // documentation https://dictionaryapi.dev/
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
