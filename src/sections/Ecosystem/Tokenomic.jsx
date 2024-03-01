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
              width: 500,
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
        className=" container-wrapper rounded-2xl bg-secondary px-6 py-4 my-6"
      >
        <div>
          <h1 className=" text-center text-2xl sm:text-4xl font-work font-bold font-64 uppercase text-grad mb-8 mt-2 ">
            Tokonomics
          </h1>
        </div>
        <div className=" flex justify-center items-center gap-6 flex-col sm:flex-row ">
          <div className="max-w-[600px] sm:max-w-[500px] sm:w-full w-auto">
            <ReactApexChart
              options={chartData.options}
              series={chartData.series}
              type="donut"
            />
          </div>
          <div id="html-dist">
            <div className="Tokenomics-module--token_content--856c1 flex justify-center items-center flex-col sm:flex-row gap-[4rem]">
              <ul className="  ">
                <li className="flex-col flex  bg-primary rounded-md py-2 px-4  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md py-2 px-4  my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md py-2 px-4   my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
              </ul>
              <ul>
                <li className="flex-col flex  bg-primary rounded-md py-2 px-4   my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md py-2 px-4   my-2">
                  <span className="text-white">Pre-Seed Round</span>
                  <span className="text-white">Supply: 4,550,000</span>
                </li>
                <li className="flex-col flex  bg-primary rounded-md py-2 px-4   my-2">
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
