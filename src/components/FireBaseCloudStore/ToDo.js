// import React, { useEffect, useState } from "react";
// import {
//   addDoc,
//   setDoc,
//   collection,
//   getDocs,
//   serverTimestamp,
//   deleteDoc,
//   deleteField,
//   updateDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "../FireBase/FireBaseConfig";
// import uuid from "react-uuid";
// import {
//   Container,
//   Grid,
//   TextField,
//   Button,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   List,
//   Snackbar,
//   Stack,
//   Typography,
//   IconButton,
//   Box,
//   Skeleton,
// } from "@mui/material";
// import MuiAlert from "@mui/material/Alert";
// import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import "../E-Commerce/Demo.css";

// export default function ToDo() {
//   const [todoVal, setTodoVal] = useState("");
//   const [todo, setTodo] = useState(false);
//   const [delTodo, setDelTodo] = useState(false);
//   const [getTodo, setGetTodo] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   const [isTodoEmpty, setIsTodoEmpty] = useState(false);
//   const [isTodoLoading, setIsTodoLoading] = useState(false);
//   const [isTodoUpdate, setIsTodoUpdate] = useState(false);
//   const [isUpdateValue, setIsUpdateValue] = useState("");

//   const addTodoVal = () => {
//     if (todoVal.length > 0) {
//       const dataReference = collection(db, "ToDos");
//       const todoKeys = {
//         todoId: uuid(),
//         Text: todoVal,
//         time: new Date(),
//       };
//       const currentTodoValue = addDoc(dataReference, todoKeys);
//       setTodoVal("");
//       setTodo(true);
//       handleClick();
//       setIsTodoUpdate(false);
//       setIsTodoEmpty(false);
//       console.log("add " + todo);
//       console.log("update " + isTodoUpdate);
//     } else {
//       setIsTodoEmpty(true);
//     }
//   };

//   useEffect(() => {
//     const getTodoVal = async () => {
//       const dataReference = collection(db, "ToDos");
//       const getData = await getDocs(dataReference);
//       const receivedData = getData.docs.map((doc) => ({
//         text: doc.data().Text,
//         id: doc.id,
//       }));
//       setGetTodo(receivedData);
//       setIsTodoLoading(true);
//     };

//     getTodoVal();
//   }, [todo, delTodo, isTodoUpdate]);
//   const deleteData = (e) => {
//     deleteDoc(doc(db, "ToDos", e));
//     console.log(e);
//     setDelTodo(!delTodo);
//   };

//   const Alert = React.forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }

//     setOpen(false);
//   };

//   ///////////////////////////////////////////////////////////////

//   const editTodo = (e) => {
//     const filteredValue = getTodo.filter((i) => {
//       return i.id == e;
//     });
//     const obj = {
//       id: filteredValue[0].id,
//       text: filteredValue[0].text,
//     };
//     setIsUpdateValue(obj);
//   };

//   const updateTodo = async (i) => {
//     const dataReference = doc(db, "ToDos", i);

//     await updateDoc(dataReference, {
//       Text: isUpdateValue.text,
//     });

//     setIsTodoUpdate(true);
//     setTodo(false);
//     handleClick();
//   };

//   return (
//     <>
//       <Grid container justifyContent="center" sx={{ marginTop: "2%" }}>
//         <Grid item>
//           <TextField
//             id="outlined-basic"
//             label="ToDo"
//             variant="outlined"
//             placeholder="Add ToDo :"
//             size="small"
//             value={todoVal}
//             onChange={(e) => setTodoVal(e.target.value)}
//           />
//           {isTodoEmpty ? (
//             <Typography color="error">Todo should not be empty </Typography>
//           ) : (
//             ""
//           )}
//         </Grid>
//         <Grid item sx={{ marginLeft: "1%" }}>
//           <Button variant="contained" color="success" onClick={addTodoVal}>
//             <AddIcon />
//           </Button>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         justifyContent="center"
//         sx={{ height: "80vh", overflow: "auto" }}
//       >
//         <Grid item sx={{ marginTop: "2%", wordWrap: "break-word" }} xs={4}>
//           {isTodoLoading ? (
//             <>
//               <List>
//                 {getTodo?.map((i) => (
//                   <ListItem disablePadding>
//                     <ListItemButton component="a" href="#simple-list">
//                       <ListItemText primary={i.text} />
//                       <IconButton onClick={() => editTodo(i.id)}>
//                         <EditIcon color="primary" />
//                       </IconButton>
//                       <IconButton onClick={() => deleteData(i.id)}>
//                         <DeleteIcon color="error" />
//                       </IconButton>
//                     </ListItemButton>
//                   </ListItem>
//                 ))}
//               </List>
//               <TextField
//                 value={isUpdateValue.text}
//                 onChange={(e) =>
//                   setIsUpdateValue({ ...isUpdateValue, text: e.target.value })
//                 }
//               />
//               <Button onClick={() => updateTodo(isUpdateValue.id)}>
//                 Upadte
//               </Button>
//             </>
//           ) : (
//             <Box sx={{ width: 300 }}>
//               <Skeleton />
//               <Skeleton animation="wave" />
//               <Skeleton animation={false} />
//               <br />
//               <Skeleton />
//               <Skeleton animation="wave" />
//               <Skeleton animation={false} />
//               <br />
//               <Skeleton />
//               <Skeleton animation="wave" />
//               <Skeleton animation={false} />
//             </Box>
//           )}
//         </Grid>
//       </Grid>

//       <Stack spacing={2} sx={{ width: "100%" }}>
//         <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
//           <Alert
//             onClose={handleClose}
//             severity="success"
//             sx={{ width: "100%" }}
//           >
//             {isTodoUpdate ? " Todo Update successfully !" : ""}
//             {todo ? " Add Todo successfully !" : ""}
//           </Alert>
//         </Snackbar>
//       </Stack>
//     </>
//   );
// }

// /////////////////  CHAT GPT Code://////////////////////////////////////////

import React, { useEffect, useState } from "react";
import {
  addDoc,
  setDoc,
  collection,
  getDocs,
  serverTimestamp,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../FireBase/FireBaseConfig";
import uuid from "react-uuid";
import {
  Container,
  Grid,
  TextField,
  Button,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  Snackbar,
  Stack,
  Typography,
  IconButton,
  Box,
  Skeleton,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../E-Commerce/Demo.css";

export default function ToDo() {
  const [todoVal, setTodoVal] = useState("");
  const [todoState, setTodoState] = useState({
    value: false,
    update: false,
  });
  const [getTodo, setGetTodo] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [isUpdateValue, setIsUpdateValue] = useState("");

  const addTodoVal = async () => {
    if (todoVal.length > 0) {
      const dataReference = collection(db, "ToDos");
      const todoKeys = {
        todoId: uuid(),
        Text: todoVal,
        time: new Date(),
      };
      await addDoc(dataReference, todoKeys);
      setTodoVal("");
      setTodoState({ ...todoState, value: !todoState.value });
      handleClick("Todo added successfully!");
      setIsUpdateValue("");
    } else {
      setSnackbar({ open: true, message: "Todo should not be empty" });
    }
  };

  useEffect(() => {
    const getTodoVal = async () => {
      const dataReference = collection(db, "ToDos");
      const getData = await getDocs(dataReference);
      const receivedData = getData.docs.map((doc) => ({
        text: doc.data().Text,
        id: doc.id,
      }));
      setGetTodo(receivedData);
    };

    getTodoVal();
  }, [todoState.value, todoState.update]);

  const deleteData = async (e) => {
    await deleteDoc(doc(db, "ToDos", e));
    setTodoState({ ...todoState, value: !todoState.value });
  };

  const updateTodo = async (i) => {
    const dataReference = doc(db, "ToDos", i);

    await updateDoc(dataReference, {
      Text: isUpdateValue.text,
    });

    setTodoState({ ...todoState, update: !todoState.update });
    handleClick("Todo updated successfully!");
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = (message) => {
    setSnackbar({ open: true, message });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({ open: false, message: "" });
  };

  const editTodo = (e) => {
    const filteredValue = getTodo.find((i) => i.id === e);
    setIsUpdateValue(filteredValue);
  };

  return (
    <>
      <Grid container justifyContent="center" sx={{ marginTop: "2%" }}>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Add ToDo"
            variant="outlined"
            placeholder="Add ToDo :"
            size="small"
            value={todoVal}
            onChange={(e) => setTodoVal(e.target.value)}
          />
          {snackbar.message && (
            <Typography
              color={snackbar.message.includes("empty") ? "error" : "info"}
            >
              {snackbar.message}
            </Typography>
          )}
        </Grid>
        <Grid item sx={{ marginLeft: "1%" }}>
          <Button variant="contained" color="success" onClick={addTodoVal}>
            <AddIcon />
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        sx={{ height: "80vh", overflow: "auto" }}
      >
        <Grid item sx={{ marginTop: "2%", wordWrap: "break-word" }} xs={4}>
          {getTodo.map((i) => (
            <List key={i.id}>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText primary={i.text} />
                  <IconButton onClick={() => editTodo(i.id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => deleteData(i.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            </List>
          ))}
          {isUpdateValue && (
            <>
              <TextField
                value={isUpdateValue.text}
                onChange={(e) =>
                  setIsUpdateValue({ ...isUpdateValue, text: e.target.value })
                }
              />
              <Button onClick={() => updateTodo(isUpdateValue.id)}>
                Update
              </Button>
            </>
          )}
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            // severity="success"
            serverity={todoState}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
