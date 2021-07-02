import React from "react";
import { StyledFinishButton } from "./styles/StyledFinishButton";

const FinishButton = ({ callback }) => {
  return (
    <StyledFinishButton onClick={callback}>Finish Game</StyledFinishButton>
  );
};

export default FinishButton;
