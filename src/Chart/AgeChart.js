import React from "react";
import { Bar } from "react-chartjs-2";
const ChartPage = (props) => {
  const { age } = props;

  const radarData = {
    labels: ["11-20", "21-30", "31-40", "41-50", "51-60", "61-70"],
    datasets: [
      {
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#ba68c8",
          "#ff8a65",
        ],
        borderColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#ba68c8",
          "#ff8a65",
        ],
        borderWidth: 1,
        hoverBackgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#ba68c8",
          "#ff8a65",
        ],
        hoverBorderColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#ba68c8",
          "#ff8a65",
        ],
        data: age.age,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <h2>อายุ</h2>
      <Bar
        data={radarData}
        width={100}
        height={50}
        options={{
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0, // it is for ignoring negative step.
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default ChartPage;
