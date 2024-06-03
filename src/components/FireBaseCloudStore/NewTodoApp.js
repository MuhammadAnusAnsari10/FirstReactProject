import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function NewTodoApp() {
  const [todoState, setTodoState] = useState({
    message: "",
    addTodo: false,
    upadateTodo: false,
    deleteTodo: false,
  });

  const addTodoFunction = () => {
    setTodoState({
      message: "Add todo successfully",
      addTodo: true,
      upadateTodo: false,
      deleteTodo: false,
    });
  };
  console.log(todoState);

  const updateTodoFunction = () => {
    setTodoState({
      message: "Update todo successfully",
      addTodo: false,
      upadateTodo: true,
      deleteTodo: false,
    });
  };

  const deleteTodoFunction = () => {
    setTodoState({
      message: "Delete todo successfully",
      addTodo: false,
      upadateTodo: false,
      deleteTodo: true,
    });
  };

  return (
    <>
      <Typography variant="h5" sx={{ color: todoState.message ? "green" : "" }}>
        {todoState.message}
      </Typography>
      <Button color="success" variant="contained" onClick={addTodoFunction}>
        Add Todo
      </Button>
      <br />
      <Button color="primary" variant="contained" onClick={updateTodoFunction}>
        Upadate Todo
      </Button>
      <br />
      <Button color="error" variant="contained" onClick={deleteTodoFunction}>
        Delete Todo
      </Button>
    </>
  );
}
