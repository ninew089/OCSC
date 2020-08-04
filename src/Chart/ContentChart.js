import React from "react";
import { Radar } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
defaults.global.defaultFontFamily = "Prompt";
const ChartPage = (props) => {
  const { content } = props;
  const radarData = {
    labels: [
      "การมีอิสระและการมีส่วนร่วมในการทำงาน",
      "ความสัมพันธ์กับผู้อื่น",
      "ลักษณะของงานที่มีผลต่อสุขภาพ",
      "การสื่อสารกับผู้อื่น",
      "ความถูกต้องและชัดเจนในการทำงาน",
      "ลักษณะทางกายภาพของการทำงาน",
      "อิสระที่จะกำหนดลักษณะการทำงาน",
      "ผลกระทบของงานที่มีต่อหน่วยงาน",
      "ผลกระทบของงานที่มีต่อหน่วยงาน",
    ],
    datasets: [
      {
        label: "ค่าเฉลี่ยกิจกรรมการทำงาน",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",

        pointBackgroundColor: "rgba(75,192,192,0.4)",

        pointHoverBorderColor: "rgba(75,192,192,0.4)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",

        pointBackgrounColor: "rgba(75,192,192,0.4)",

        data: [
          content[0].d0,
          content[1].d0,
          content[2].d0,
          content[3].d0,
          content[4].d0,
          content[5].d0,
          content[6].d0,
          content[7].d0,
          content[8].d0,
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
