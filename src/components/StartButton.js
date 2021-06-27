import React from "react";
import { StyledStartButton } from "./styles/StyledButtonStart";

const StartButton = ({ callback }) => {
  return <StyledStartButton onClick={callback}>Start Game</StyledStartButton>;
};

export default StartButton;
