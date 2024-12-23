import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPOListPage from "./components/IPOListPage";
import IPODetailsPage from "./components/IPODetailsPage";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<IPOListPage />} />
        <Route path="/ipo-details/:id" element={<IPODetailsPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
