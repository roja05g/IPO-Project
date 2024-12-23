import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Check from "@mui/icons-material/Check";

const ColorlibStepIconRoot = styled("div")(({ ownerState }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 40,
  height: 40,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, rgb(76,175,80) 0%, rgb(56,142,60) 50%, rgb(46,125,50) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  "@media (max-width: 600px)": {
    width: 30,
    height: 30,
  },
}));

const ColorlibStepIcon = ({ completed, className }) => {
  return (
    <ColorlibStepIconRoot ownerState={{ completed }} className={`${className}`}>
      {completed && <Check />}
    </ColorlibStepIconRoot>
  );
};

ColorlibStepIcon.propTypes = {
  completed: PropTypes.bool,
  className: PropTypes.string,
};

export default ColorlibStepIcon;
