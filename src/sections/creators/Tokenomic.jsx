import React, { useState } from "react";

import ReactApexChart from "react-apexcharts";

function Tokenomic() {
  const [chartData] = useState({
    series: [20, 20, 20, 20, 20],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Apple", "Banana", "Orange", "Grapes", "Pineapple"],
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return ` ${val}%`;
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div>
      <div
        id="chart"
        className=" container-wrapper rounded-md bg-secondary px-6"
      >
        <div className=" flex justify-between items-center ">
          <div className=" max-w-[500px] w-full">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="donut"
            />
          </div>
          <div id="html-dist">
            <div className="Tokenomics-module--token_content--856c1">
              <ul className=" grid grid-rows-4  ">
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md p-2  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokenomic;
