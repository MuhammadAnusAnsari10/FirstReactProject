import React, { useContext } from "react";
import { userValue } from "./ContextMainParent";
import { Button } from "@mui/material";
export default function ContextChildComopent() {
  const { value } = useContext(userValue);
  return <h1>{value}</h1>;
}
