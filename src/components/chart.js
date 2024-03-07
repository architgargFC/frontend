import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: true,
  plugins: {
    title: {
      display: true,
      text: "Transactions Data",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
      beginAtZero: true,
     
    },
    y1: {
      type: "linear",
      display: false,
      position: "left",
      grid: {
        drawOnChartArea: false,
      },
      beginAtZero: true,
      
    },
  },
};

export function Chartss({ t, pt }) {
  let label = Object.keys(t);
  let d1 = label.map((w) => t[w]);
  let d2 = label.map((w) => pt[w]);
  // console.log(label);
  // console.log(d1);
  // console.log(d2);
  const fdata = {
    labels:label,
    datasets: [
      {
        label: "Original Transaction",
        data: d1,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
        
      },
      {
        label: "Predicted",
        data: d2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };
  // return null
  return <Line options={options} data={fdata} />;
}
