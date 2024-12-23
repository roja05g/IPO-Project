import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Breadcrumbs,
  Link,
  Grid,
} from "@mui/material";
import ipoData from "../ipoData.json";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CustomizedSteppers from "./CustomStepper";


const IPODetailsPage = () => {
  const { id } = useParams();
  const ipo = ipoData.find((item) => item.id === parseInt(id));
  const navigate = useNavigate();


  if (!ipo) {
    return <Typography variant="h6">IPO not found</Typography>;
  }

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(ipo, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${ipo.companyName}_Details.json`;
    link.click();
  };

  return (
    <Box
      sx={{
        fontFamily: "Sora",
        padding: 3,
        maxWidth: "85%",
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", fontWeight: 600, marginBottom: "15px" }}
      >
        IPO DETAILS PAGE
      </Typography>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="›"
        sx={{ marginBottom: "15px", display: { xs: "none", sm: "flex" } }}
      >
        <Link
          underline="hover"
          color="inherit"
          href="/"
          sx={{ textDecoration: "none", cursor: "pointer" }}
        >
          Home
        </Link>
        <Typography>Market Watch</Typography>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowLeftIcon
            sx={{
              border: "1px solid black",
              borderRadius: "50%",
              padding: "5px",
              cursor: "pointer",
              marginRight: "10px",
              display: { xs: "none", sm: "block" },
            }}
            onClick={() => navigate("/")}
          />
          <Avatar
            src={ipo.logo}
            alt={ipo.companyName}
            sx={{ width: 50, height: 40, marginRight: "10px" }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              display: { xs: "inline", sm: "block" },
            }}
          >
            {ipo.companyName}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button onClick={handleDownload}>
            <SimCardDownloadOutlinedIcon
              sx={{ color: "black", fontSize: 35 }}
            />
          </Button>
          <Button
            variant="contained"
            sx={{
              fontSize: "12px",
              backgroundColor: "black",
              color: "white",
              textTransform: "none",
              marginTop: "5px",
            }}
          >
            Apply now
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
          border: "0.2px solid gray",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "15px" }}>
          IPO Details
        </Typography>
        <Box sx={{border:'0.2px solid gray',borderRadius:'8px',padding:'10px'}}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Issue Size</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.issueSize}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Price Range</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.details.priceRange}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Minimum Amount</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.details.minAmount}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Lot Size</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.lotSize}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Issue Dates</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.details.issueDates}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Listed On</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.details.listedon}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Listed Price</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.details.listedprice}</Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography sx={{ color: "gray",fontSize:{xs:"0.8rem",sm:"0.9rem"} }}>Listing Gains</Typography>
            <Typography sx={{fontSize:{xs:"0.8rem",sm:"0.9rem"}}}>{ipo.details.listinggains}(<span style={{color:'red'}}>10.0%</span>)</Typography>
          </Grid>
        </Grid>
        </Box>
      </Box>

      <Box>
        <CustomizedSteppers ipoTimeline={ipo.details.timeline} />
      </Box>

      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: "15px" }}>
          {ipo.companyName} PRIVATE LIMITED
        </Typography>
        <Typography sx={{ fontSize: "14px", lineHeight: "1.6" }}>
          {ipo.details.about}
        </Typography>
      </Box>
    </Box>
  );
};

export default IPODetailsPage;
