import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme, ownerState }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    ...(ownerState.orientation === "horizontal" && { top: 22 }),
    ...(ownerState.orientation === "vertical" && { marginLeft: 22 }),
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(136deg, rgb(76,175,80) 0%, rgb(56,142,60) 50%, rgb(46,125,50) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(136deg, rgb(76,175,80) 0%, rgb(56,142,60) 50%, rgb(46,125,50) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    ...(ownerState.orientation === "horizontal" && {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    }),
    ...(ownerState.orientation === "vertical" && {
      width: 3,
      minHeight: "30px !important",
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
      marginLeft: 1,
    }),
  },
}));

export default ColorlibConnector;
