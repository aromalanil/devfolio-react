import React, { useState, useEffect, useRef } from "react";
import debounce  from "../utils/debounce";

function ListInput({ data, position, name, addItem }) {
  const suggestionLimit = 5;
  const inputRef = useRef(null);
  const [suggestionList, setSuggestionList] = useState([]);
  const [isFocus, setFocus] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const input = inputRef.current;
    const focusListener = () => {
      setFocus(true);
    };
    const blurListener = () => {
      setTimeout(() => setFocus(false), 300);
    };
    input.addEventListener("focus", focusListener);
    input.addEventListener("blur", blurListener);
    return () => {
      document.body.removeEventListener("focus", focusListener);
    };
  }, []);

  const searchSuggestions = async (url) => {
    let response = await fetch(url);
    if (response.ok) {
      let json = await response.json();
      let data = json.items;
      let suggestions = [];
      for (let i = 0; i < data.length && i < suggestionLimit; i++) {
        suggestions.push(data[i].name);
      }
      setSuggestionList(suggestions);
    } else {
      alert("Error fetching data from StackExchange API");
    }
  };

  const debouncedSearch = React.useCallback(debounce(searchSuggestions, 400), []);

  const handleInputChange = (e) => {
    let newValue = e.target.value;
    setValue(newValue);
    let url = `https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&inname=${newValue}&site=stackoverflow`;

    debouncedSearch(url);
  };

  const handleSuggestionSelect = (suggestion) => {
    let doesSuggestionExist = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === suggestion) {
        doesSuggestionExist = true;
        break;
      }
    }
    if (!doesSuggestionExist) {
      addItem({
        key: suggestion,
        position: position,
        name: suggestion,
      });
    }
    setSuggestionList([]);
    setValue("");
  };

  const generateSuggestions = (suggestions) =>
    suggestions.map((suggestion, index) => (
      <span
        className="suggestion-item"
        key={index}
        onClick={() => handleSuggestionSelect(suggestion)}>
        {suggestion}
      </span>
    ));

  return (
    <div className="input-wrapper">
      <input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        type="text"
        className="list-input"
        placeholder={`${position} Add ${name}`}
      />
      {suggestionList.length !== 0 && isFocus && (
        <div className={"input-suggestions"}>
          {generateSuggestions(suggestionList)}
        </div>
      )}
    </div>
  );
}

export default ListInput;
