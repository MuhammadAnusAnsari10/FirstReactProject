import { useState } from "react";
export default function ChangeCase() {
  const [textValue, setTextValue] = useState("");
  const [upperCase, setUpperCase] = useState("");
  const [lowerCase, setLowerCase] = useState("");
  function check(e) {
    setTextValue(e.target.value);
  }
  function btnHandler1() {
    if (textValue.length >= 200) {
      alert("maximum Characters is 200");
    } else {
      let convertedText = textValue.toUpperCase();
      setUpperCase(convertedText);
    }
  }
  function btnHandler2() {
    if (textValue.length >= 200) {
      alert("maximum Characters is 200");
    } else {
      let convertedText = textValue.toLowerCase();
      setLowerCase(convertedText);
    }
  }
  return (
    <>
      <textarea
        cols="40"
        rows="10"
        onChange={check}
        value={textValue}
      ></textarea>
      <br />

      <button
        disabled={textValue.length <= 0 ? true : false}
        onClick={btnHandler1}
      >
        Change Upper Case
      </button>
      <p>{upperCase}</p>
      <button
        disabled={textValue.length <= 0 ? true : false}
        onClick={btnHandler2}
      >
        Change Lower Case
      </button>
      <p>{lowerCase}</p>
    </>
  );
}
