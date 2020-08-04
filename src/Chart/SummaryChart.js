import React from "react";
import { HorizontalBar } from "react-chartjs-2";

import Data from "../Data/tableData";
import "../Css/Work.css";

const ChartPage = (props) => {
  const { summary1 } = props;
  const Data1 = Data;

  const data = {
    labels: [
      Data1[0].name,
      Data1[1].name,
      Data1[2].name,
      Data1[3].name,
      Data1[4].name,
      Data1[5].name,
      Data1[6].name,
      Data1[7].name,
      Data1[8].name,
      Data1[9].name,
      Data1[10].name,
      Data1[11].name,
      Data1[12].name,
      Data1[13].name,
      Data1[14].name,
      Data1[15].name,
      Data1[16].name,
      Data1[17].name,
    ],
    datasets: [
      {
        label: "มิติกิจกรรมการทำงาน",
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
        hoverBackgroundColor: "#FF6384",
        hoverBorderColor: "#FF6384",
        data: [
          summary1[0].activity,
          summary1[1].activity,
          summary1[2].activity,
          summary1[3].activity,
          summary1[4].activity,
          summary1[5].activity,
          summary1[6].activity,
          summary1[7].activity,
          summary1[8].activity,
          summary1[9].activity,
          summary1[10].activity,
          summary1[11].activity,
          summary1[12].activity,
          summary1[13].activity,
          summary1[14].activity,
          summary1[15].activity,
          summary1[16].activity,
          summary1[17].activity,
        ],
      },
      {
        label: "มิติบริบทการทำงาน",
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
        hoverBackgroundColor: "#36A2EB",
        hoverBorderColor: "#36A2EB",
        data: [
          summary1[0].context,
          summary1[1].context,
          summary1[2].context,
          summary1[3].context,
          summary1[4].context,
          summary1[5].context,
          summary1[6].context,
          summary1[7].context,
          summary1[8].context,
          summary1[9].context,
          summary1[10].context,
          summary1[11].context,
          summary1[12].context,
          summary1[13].context,
          summary1[14].context,
          summary1[15].context,
          summary1[16].context,
          summary1[17].context,
        ],
      },
      {
        label: "ค่าเฉลีย",
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 1,
        hoverBackgroundColor: "#FFCE56",
        hoverBorderColor: "#FFCE56",
        data: [
          summary1[0].mean,
          summary1[1].mean,
          summary1[2].mean,
          summary1[3].mean,
          summary1[4].mean,
          summary1[5].mean,
          summary1[6].mean,
          summary1[7].mean,
          summary1[8].mean,
          summary1[9].mean,
          summary1[10].mean,
          summary1[11].mean,
          summary1[12].mean,
          summary1[13].mean,
          summary1[14].mean,
          summary1[15].mean,
          summary1[16].mean,
          summary1[17].mean,
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <HorizontalBar
        data={data}
        width={600}
        height={760}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  stepSize: 0.1,
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
