import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

function Chart(prop) {
  const dataPointsValues = prop.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
//getting array of values from each object of label and value from chartDataPoints array 


  const totalMaximun = Math.max(...dataPointsValues);  //here getting each value seprately because Math.max() takes number not array


  return (
    <div className="chart">
      {prop.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={Math.random().toString()}
            value={dataPoint.value}
            maxValue={totalMaximun}         // maxValue props is used to to get maximum amount of expense in month of particular year, then all the other months amount will be percentile with respect that maximum  amount
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
