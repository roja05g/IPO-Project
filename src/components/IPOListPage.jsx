import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import ipoData from "../ipoData.json";

const IPOListPage = () => {
  return (
    <Box
      sx={{
        fontFamily: "Sora",
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "20px", fontWeight: 600 }}
      >
        IPO LIST 
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>
                Company / Issue Date
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Issue Size</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Price Range</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Min Invest / Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ipoData.map((ipo) => (
              <TableRow
                key={ipo.id}
                component={Link}
                to={`/ipo-details/${ipo.id}`}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#f9f9f9" },
                }}
              >
                <TableCell>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                  >
                    <Avatar
                      src={ipo.logo}
                      alt={ipo.companyName}
                      sx={{ width: 50, height: 40 }}
                    />
                    <Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {ipo.companyName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {ipo.issueDate}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{ipo.issueSize}</TableCell>
                <TableCell>{ipo.priceRange}</TableCell>
                <TableCell>
                  {ipo.minInvestment}
                  <br />
                  {ipo.lotSize}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IPOListPage;
