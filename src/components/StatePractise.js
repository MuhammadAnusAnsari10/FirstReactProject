// import { useState } from "react";

// export default function State() {
//   const [iniText, setIniText] = useState("");
//   const [iniResult, setResultText] = useState("");
//   const [isChecked, setisChecked] = useState(false);
//   function inputHandler(e) {
//     setIniText(e.target.value);
//     console.log(iniText);
//   }
//   function btnHandler() {
//     setResultText(iniText);
//   }

//   function checkBox(e) {
//     setisChecked(!isChecked);
//   }
//   return (
//     <>
//       <textarea onChange={inputHandler} value={iniText}></textarea>
//       <button
//         disabled={(iniText.length > 0 && isChecked == true) ? false:true}
//         onClick={btnHandler}
//       >
//         Check Text
//       </button>
//       <input checked={isChecked} type="checkbox" onClick={checkBox} />
//       <p>{iniResult}</p>
//     </>
//   );
// }

import { useState } from "react";
export default function State() {
  const [iniText, setIniText] = useState("");
  const [showText, setShowText] = useState("");
  const [isCheckBox, setCheckBox] = useState(false);
  function textChanger(e) {
    setIniText(e.target.value);
    // console.log(iniText);
  }
  function buttonHandler() {
    setShowText(iniText);
  }
  function checkBox(e) {
    setCheckBox(!isCheckBox);
  }
  return (
    <>
      <textarea placeholder="type here" onChange={textChanger}></textarea>
      <br />
      <button
        disabled={iniText.length > 0 && isCheckBox == true ? false : true}
        onClick={buttonHandler}
      >
        Show Text
      </button>
      <input
        checked={isCheckBox}
        type="checkbox"
        className="ms-1"
        onClick={checkBox}
      />
      <p>{showText}</p>
      {/* {console.log(showText)} */}
    </>
  );
}
