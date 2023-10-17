import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import Bars from "./Bars";
import Piechart from "./Piechart";
const Charts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} xs={6} md={7}>
        <Card sx={{ display: "flex", width: "100%", padding: "10px" }}>
          <Typography
            variant="h5"
            component="div"
            fontSize="18px"
            fontWeight="600"
          >
            Overview
            <Typography fontSize="12px" color="#c2c0c0" fontWeight="bold">
              Monthly Earning
            </Typography>
          </Typography>
          <Bars />
        </Card>
      </Grid>
      <Grid item sm={12} xs={6} md={5}>
        <Card
          sx={{
            display: "flex",

            width: "100",
            padding: "10px",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            fontSize="18px"
            fontWeight="600"
          >
            Customers
            <Typography fontSize="12px" color="#c2c0c0" fontWeight="bold">
              Customer that buy products
            </Typography>
          </Typography>
          <Piechart />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Charts;
