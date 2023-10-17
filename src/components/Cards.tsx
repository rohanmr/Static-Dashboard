import Grid from "@mui/material/Grid";
import React from "react";
import "../styles/dashboard.css";
import { Avatar, Box, Card, Typography } from "@mui/material";
import {
  AccountBalanceWalletOutlined,
  ArrowDownward,
  CurrencyExchangeOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { RiFileList2Line } from "react-icons/ri";
const Cards = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6} md={3}>
        <Card sx={{ display: "flex", padding: "20px ", width: "250px" }}>
          <Avatar
            sx={{ bgcolor: "#b8f3bb", height: "80px", width: "80px" }}
            aria-label="recipe"
          >
            <CurrencyExchangeOutlined
              sx={{ fontSize: "35px", color: "green" }}
            />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="#c2c0c0"
              component="div"
              fontSize="12px"
              fontWeight="bold"
            >
              Earning
            </Typography>
            <Typography component="div" variant="h5" fontWeight="600">
              $198K
            </Typography>

            <Typography
              component="div"
              variant="h5"
              fontSize="12px"
              display="flex"
            >
              <ArrowUpwardIcon
                sx={{
                  fontSize: "15px",
                  color: "green",
                  fontWeight: "600",
                }}
              />
              37.8% this month
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card sx={{ display: "flex", padding: "20px ", width: "250px" }}>
          <Avatar
            sx={{ bgcolor: "#E7DBFF", height: "80px", width: "80px" }}
            aria-label="recipe"
          >
            <RiFileList2Line fontSize="35px" color="#A301FF" />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="#c2c0c0"
              component="div"
              fontSize="12px"
              fontWeight="bold"
            >
              Orders
            </Typography>
            <Typography component="div" variant="h5" fontWeight="600">
              $2.4K
            </Typography>

            <Typography
              component="div"
              variant="h5"
              fontSize="12px"
              display="flex"
            >
              <ArrowDownward
                sx={{
                  fontSize: "15px",
                  color: "red",
                  fontWeight: "600",
                }}
              />
              2% this month
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card sx={{ display: "flex", padding: "20px ", width: "250px" }}>
          <Avatar
            sx={{ bgcolor: "#CCF2FF", height: "80px", width: "80px" }}
            aria-label="recipe"
          >
            <AccountBalanceWalletOutlined
              sx={{ fontSize: "35px", color: "#1865C4" }}
            />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="#c2c0c0"
              component="div"
              fontSize="12px"
              fontWeight="bold"
            >
              Balance
            </Typography>
            <Typography component="div" variant="h5" fontWeight="600">
              $2.4K
            </Typography>

            <Typography
              component="div"
              variant="h5"
              fontSize="12px"
              display="flex"
            >
              <ArrowDownward
                sx={{
                  fontSize: "15px",
                  color: "red",
                  fontWeight: "600",
                }}
              />
              2% this month
            </Typography>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={3}>
        <Card sx={{ display: "flex", padding: "20px ", width: "250px" }}>
          <Avatar
            sx={{ bgcolor: "#FEC5E8", height: "80px", width: "80px" }}
            aria-label="recipe"
          >
            <ShoppingBagOutlined sx={{ fontSize: "35px", color: "#EA5675" }} />
          </Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "10px",
            }}
          >
            <Typography
              variant="subtitle1"
              color="#c2c0c0"
              component="div"
              fontSize="12px"
              fontWeight="bold"
            >
              Total Sales
            </Typography>
            <Typography component="div" variant="h5" fontWeight="600">
              $89K
            </Typography>

            <Typography
              component="div"
              variant="h5"
              fontSize="12px"
              display="flex"
            >
              <ArrowUpwardIcon
                sx={{
                  fontSize: "15px",
                  color: "green",
                  fontWeight: "600",
                }}
              />
              11% this week
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Cards;
