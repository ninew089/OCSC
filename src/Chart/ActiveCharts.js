import React from "react";
import { Radar } from "react-chartjs-2";

const ChartPage = (props) => {
  const { active } = props;

  const radarData = {
    labels: [
      "การวิเคราะห์ข้อมูล",
      "การปฏิสัมพันธ์กับผู้อื่น",
      "การบริหารจัดการข้อมูล",
      "การใช้อุปกรณ์",
      "การเป็นผู้นำ",
      "การประเมินทรัพยากร",
      "การบริหารทรัพยากร",
      "การจัดระบบงาน",
      "การจัดการความสัมพันธ์บุคล",
    ],
    datasets: [
      {
        label: "ค่าเฉลี่ยกิจกรรมการทำงาน",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
        pointBackgrounColor: "rgba(255, 153, 51, 1)",

        data: [
          active[0].d0,
          active[1].d0,
          active[2].d0,
          active[3].d0,
          active[4].d0,
          active[5].d0,
          active[6].d0,
          active[7].d0,
          active[8].d0,
        ],
      },
    ],
  };

  return (
    <div>
      <Radar
        data={radarData}
        options={{
          scale: {
            ticks: {
              beginAtZero: true,
              max: 7,
              min: 0,
              stepSize: 1,
            },
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default ChartPage;
