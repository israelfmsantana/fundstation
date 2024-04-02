"use client";
// import React, { useEffect, useState, ReactNode } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "../Buttons/ChartFilter";
import Card from "../Layout/Card"

import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";

import {
  createDate,
  convertDateToUnixTimestamp,
  convertUnixTimestampToDate,
} from "@/app/utils/date-helpers"


interface StockChartDetailsProps {
  dataStock: any
}
const StockCardChartDetails: React.FC<StockChartDetailsProps> = ({
  dataStock
}) => {

  let data = dataStock.historicalDataPrice
  var ohlc = [],
    volume = [],
    groupingUnits = [
      [
        "week", // unit name
        [1] // allowed multiples
      ],
      ["month", [1, 2, 3, 4, 6]]
    ],
    i = 0;

  const dataLength = data ? data.length : 0;

  for (i; i < dataLength; i += 1) {
    ohlc.push([
      data[i]['date'], // the date
      data[i]['open'], // open
      data[i]['high'], // high
      data[i]['low'], // low
      data[i]['close'] // close
    ]);

    volume.push([
      data[i]['date'], // the date
      data[i]['volume'] // the volume
    ]);
  }

  const options = {
    rangeSelector: {
      selected: 1
    },

    title: {
      text: `${dataStock.symbol} Historical`
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "OHLC"
        },
        height: "60%",
        lineWidth: 2,
        resize: {
          enabled: true
        }
      },
      {
        labels: {
          align: "right",
          x: -3
        },
        title: {
          text: "Volume"
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 2
      }
    ],

    tooltip: {
      split: true
    },

    series: [
      {
        type: "candlestick",
        name: "AAPL",
        data: ohlc,
        dataGrouping: {
          units: groupingUnits
        }
      },
      {
        type: "column",
        name: "Volume",
        data: volume,
        yAxis: 1,
        dataGrouping: {
          units: groupingUnits
        }
      }
    ]
  };

  return (

      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />

  );
};


export default StockCardChartDetails;