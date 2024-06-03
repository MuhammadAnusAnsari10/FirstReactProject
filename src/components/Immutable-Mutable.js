// export default function Immutable({ num }) {
//   function btnHandler() {
//     num += 1;
//   }
//   return (
//     <>
//       {num}
//       <button onClick={btnHandler}>Count</button>
//     </>
//   );
// }

import { useState } from "react";
export default function Immutable() {
  const [iniValue, setValue] = useState(0);
  function increHandler() {
    setValue(iniValue + 1);
  }
  function decreHandler() {
    setValue(iniValue - 1);
    if (iniValue <= 0) {
      setValue(0);
    }
  }
  return (
    <>
      {iniValue}
      <button onClick={increHandler}>Increment</button>
      <button onClick={decreHandler}>Decrement</button>
    </>
  );
}
