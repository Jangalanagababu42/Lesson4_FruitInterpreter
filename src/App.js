import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "π": "Grapes",
  "π": "Melon",
  "π": "WaterMelon",
  "π": "Tangarine",
  "π": "Apple",
  "οΈβπ": "Pear",
  "π«β": "Olive",
  "π«": "Blue Berry",
  "π₯": "Kiwi",
  "π": "Pine Apple",
  "π": "Peach"
};

function App() {
  const [userInput, setuserInput] = useState("");
  const emojisKey = Object.keys(emojiDictionary);

  const handleChange = (e) => {
    if (emojiDictionary[e.target.value] === undefined) {
      setuserInput("Emoji You Searched Not found in our database!");
    } else {
      setuserInput(emojiDictionary[e.target.value]);
    }
  };
  const handleClick = (emoji) => {
    setuserInput(emojiDictionary[emoji]);
  };
  return (
    <div>
      <header className="header">
        <h1>
          <span>ππ</span>Fruit Interpretor<span>ππ</span>
        </h1>
      </header>
      <div className="content">
        <input
          className="input"
          placeholder="Add emojis here to search its Meaning"
          type="text"
          onChange={handleChange}
        />
        <h2>{userInput}</h2>
        <h2>"Search/click on emojis to see their meanings"</h2>
        <div className="emojiView">
          {emojisKey.map((emoji, index) => (
            <span
              key={index}
              onClick={() => handleClick(emoji)}
              className="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <div className="footer">
        <h1>About Fruit Interpretor</h1>
        <p>
          Fruit Interpretor is a place to search emojis meaning.
          <span>β€οΈβ€οΈcreated by Nagababuβ€οΈβ€οΈ</span>
        </p>
      </div>
    </div>
  );
}

export default App;
