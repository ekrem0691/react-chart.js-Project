import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GraphicTable from "./GraphicTable";
import Piecard from "./Piecard";
import StateCard from "./StateCard";
import Vertical from "./Vertical";


function Main() {
  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <Piecard />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <StateCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <GraphicTable />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Vertical />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
