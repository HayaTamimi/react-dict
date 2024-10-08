import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("null");
  function search(event) {
    event.preventDefault();
    alert("searchin...");
  }

    function handleKeywordChange(event) {
        console.log(event);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
