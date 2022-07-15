import React, { Component } from "react";
import StockCardComponent from "../StockCardComponent/StockCardComponent";
import "./StockSession.scss";

function StockSection(props) {
  return (
    <div className="stocksection">
      <StockCardComponent watchedStocks={props.watchedStocks} />
    </div>
  );
}

export default StockSection;
