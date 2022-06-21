import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import Button from "@mui/material/Button";
import "./style/Piecard.css";
ChartJS.register(ArcElement, Tooltip, Legend);
function Piecard() {
  const data = {
    // labels: ["white", "blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [262000, 238000],
        backgroundColor: ["blue", "white"],
        borderColor: ["#18803a", "#55184d"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="pie-cart">
      <div className="pie-cart-first">
        <div className="pie-cart-first-header">
          <h4>Remaining Credit</h4>
          <ErrorOutlineIcon />
        </div>
        <BarChartIcon />
      </div>
      <div className="pie-cart-last">
        <div className="pie-cart-last-prim">
          <Pie data={data} />
        </div>
        <div>
          <p>262.000/500.000</p>
          <Button variant="contained" sx={{ maxWidth: "10rem" }}>
            Enterprise
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Piecard;
