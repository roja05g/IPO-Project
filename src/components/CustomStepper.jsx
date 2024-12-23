import React from "react";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import ColorlibConnector from "./ColorlibConnector";
import ColorlibStepIcon from "./ColorlibStepIcon";

const CustomizedSteppers = ({ ipoTimeline }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const orientation = isSmallScreen ? "vertical" : "horizontal";
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "8px",
        border: { xs: "none", sm: "0.2px solid gray" },
        px: 2,
        py: 2,
        mb: 2,
      }}
    >
      <Typography variant="h6" sx={{fontWeight:'bold' }}  pb={3}>
       IPO Timeline
      </Typography>
      <Stack sx={{ width: "100%" }} >
        <Stepper
          alternativeLabel={!isSmallScreen}
          connector={<ColorlibConnector ownerState={{ orientation }} />}
          orientation={orientation}
        >
          {ipoTimeline.map((step, index) => (
            <Step key={index} completed={step.completed}>
              <StepLabel
                StepIconComponent={ColorlibStepIcon}
              >
                <Typography sx={{fontSize:{xs:"0.6rem",sm:"0.8rem"},fontWeight:'bold'}}>{step.event}</Typography>
                <Typography variant="body3" sx={{fontSize:{xs:"0.6rem",sm:"0.8rem"}}}>{step.date}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </Box>
  );
};

export default CustomizedSteppers;
