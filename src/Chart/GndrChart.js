import React from "react";
import { Doughnut } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
defaults.global.defaultFontFamily = "Prompt";
const ChartPage = (props) => {
  const { gender } = props;

  const radarData = {
    labels: ["ชาย", "หญิง"],
    datasets: [
      {
        data: [gender.gender[0], gender.gender[1]],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <h2>เพศ</h2>
      <Doughnut data={radarData} />
    </div>
  );
};

export default ChartPage;
