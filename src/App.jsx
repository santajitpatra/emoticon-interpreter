import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "👍": "Thumbs Up",
  "😁": "Beaming Face with Smiling Eyes",
  "😒": "Unamused Face",
  "😉": "Winking Face",
  "😋": "Face Savoring Food",
  "😮": "Face with Open Mouth",
  "😭": "Loudly Crying Face",
  "🥵": "Hot Face",
  "😵": "Face with Crossed-Out Eyes",
  "😵‍💫": "Face with Spiral Eyes",
  "🤬": "Face with Symbols on Mouth",
  "🤮": "Face Vomiting",
  "😡": "Enraged Face",
  "🤧": "Sneezing Face",
  "🥸": "Disguised Face",
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognize this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App container">
      <h1 className="heading">Emoticon Interpreter</h1>
      <input
      className="input"
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "75%",
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          key={emoji}
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
