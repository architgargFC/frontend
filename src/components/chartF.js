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
    intersect: true,
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
      display: false,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: true,
      },
      beginAtZero: true
     
    },
   
  },
};

export function ChartF({ t, pt }) {
  let label = Object.keys(t).slice(15,19);
  // label.map(console.log)
  let d1 = label.map((w) => t[w]);
  let d2 = label.map((w) => pt[w]);
  console.log(label);
  // console.log(d1);
  // console.log(d2);
  const fdata = {
    labels:label,
    datasets: [
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
