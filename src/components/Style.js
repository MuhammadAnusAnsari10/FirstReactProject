// import Styles from "./Styles.module.css";
import { Button } from "@mui/material";
export default function Style() {
  //   const myCss = {
  //     margin: 0,
  //     padding: 0,
  //     backgroundColor: "royalblue",
  //     color: "white",
  //   };

  // /////////////////////

  return (
    <>
      {/* inline CSS */}
      {/* <h1
        style={{
          backgroundColor: "red",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: "50px",
        }}
      >
        Hello World
      </h1> */}
      {/* internal CSS */}

      {/* <h1 style={myCss}>Hello</h1> */}

      {/* external CSS */}

      {/* <h1 className={Styles.heading}>External Css</h1>
      <h2 className={Styles.heading2}>External Css 2 </h2> */}

      <Button variant="outlined" color="error">
        Click
      </Button>
    </>
  );
}
