import React from "react";
import Sidebar from "./Sidebar";
import Grid from "@mui/material/Grid";

const Dashboard = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
