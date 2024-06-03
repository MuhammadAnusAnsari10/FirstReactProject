import { Button } from "@mui/material";
import React, { useContext } from "react";
import { userValue } from "./ContextMainParent";
export default function ContextInnerChild() {
  const { countUpdater } = useContext(userValue);
  return <Button onClick={countUpdater}>click</Button>;
}
