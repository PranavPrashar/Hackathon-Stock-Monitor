import React from "react";
import "./StockCardComponent.scss";

function checkDayChange(stock) {
  return stock > 0;
  // if (stock > 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

function StockCardComponent(props) {
  // console.log("stocks: ", props.stock?.selectedStock[0]);

  const watchedStock = props.watchedStocks;
  console.log(watchedStock);
  if (watchedStock !== undefined) {
    return (
      <>
        {watchedStock.map((stock) => {
          return (
            <div className="stockcardcomponent">
              <div className="stockcardcomponent__upper">
                <h2 className="stockcardcomponent__header">{stock.name}</h2>
                <p className="stockcardcomponent__ticker">
                  Symbol: {stock.ticker}
                </p>
              </div>
              <div className="stockcardcomponent__lower">
                <p className="stockcardcomponent__price">
                  Current Price: ${stock.price}
                </p>
                <p className="stockcardcomponent__dayHigh">
                  Day High: ${stock.day_high}
                </p>
                <p className="stockcardcomponent__dayLow">
                  Day Low: ${stock.day_low}
                </p>
                <p className="stockcardcomponent__dayOpen">
                  Day Open: ${stock.day_open}
                </p>
                <p
                  className={
                    checkDayChange(stock.day_change)
                      ? "stockcardcomponent__dayChangePositive"
                      : "stockcardcomponent__dayChangeNegative"
                  }
                >
                  Stock Change: {stock.day_change}%
                </p>
                {/* <p className={"stockcardcomponent__dayChange"}>
                  Stock Change: {stock.day_change}%
                </p> */}
              </div>
            </div>
          );
        })}
      </>
    );
  } else {
    return <h1>loading</h1>;
  }
}

export default StockCardComponent;
