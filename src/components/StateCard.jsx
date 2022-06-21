import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Button } from "@mui/material";
import "./style/StateCard.css";

function StateCard() {
  return (
    <div className="state-cart">
      <div className="state-cart-first">
        <div className="state-cart-first-header">
          <h4>Remaining Credit</h4>
          <ErrorOutlineIcon />
        </div>
      </div>
      <div className="state-cart-last">
        <div className="state-cart-last-prim">
            Active
        </div>
        <div>
          <Button variant="contained" sx={{ maxWidth: "10rem",fontSize:"10px" }}>
            Check All Page Status
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StateCard;