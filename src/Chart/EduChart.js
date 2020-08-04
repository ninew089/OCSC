import React from "react";
import { Bar } from "react-chartjs-2";
const ChartPage = (props) => {
  const { edu } = props;
  const radarData = {
    labels: [
      "ประถม",
      "มัธยมต้น",
      "มัธยมปลาย",
      "ปวช.",
      "ปวท.",
      "ปวส.",
      "ประกาศนียบัตร",
      "ประกาศนียบัตรบัณฑิต",
      "ประกาศนียบัตรบัณฑิตขั้นสูง",
      "อนุปริญญา",
      "ปริญญาตรี",
      "ปริญญาโท",
      "ปริญญาเอก",
    ],
    datasets: [
      {
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,0.4)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,0.4)",
        data: edu.education,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <h2>ระดับการศึกษา</h2>
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
