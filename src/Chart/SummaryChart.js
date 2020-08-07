import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import Data from "../Data/tableData";
import "../Css/Work.css";

const ChartPage = (props) => {
  const { summary1 } = props;
  const Data1 = Data;
  const sort1 = [
    {
      name: Data1[0].name,
      active: summary1[0].activity,
      context: summary1[0].context,
      mean: summary1[0].mean,
    },
    {
      name: Data1[1].name,
      active: summary1[1].activity,
      context: summary1[1].context,
      mean: summary1[1].mean,
    },
    {
      name: Data1[2].name,
      active: summary1[2].activity,
      context: summary1[2].context,
      mean: summary1[2].mean,
    },
    {
      name: Data1[3].name,
      active: summary1[3].activity,
      context: summary1[3].context,
      mean: summary1[3].mean,
    },
    {
      name: Data1[4].name,
      active: summary1[4].activity,
      context: summary1[4].context,
      mean: summary1[4].mean,
    },
    {
      name: Data1[5].name,
      active: summary1[5].activity,
      context: summary1[5].context,
      mean: summary1[5].mean,
    },
    {
      name: Data1[6].name,
      active: summary1[6].activity,
      context: summary1[6].context,
      mean: summary1[6].mean,
    },
    {
      name: Data1[7].name,
      active: summary1[7].activity,
      context: summary1[7].context,
      mean: summary1[7].mean,
    },
    {
      name: Data1[8].name,
      active: summary1[8].activity,
      context: summary1[8].context,
      mean: summary1[8].mean,
    },
    {
      name: Data1[9].name,
      active: summary1[9].activity,
      context: summary1[9].context,
      mean: summary1[9].mean,
    },
    {
      name: Data1[10].name,
      active: summary1[10].activity,
      context: summary1[10].context,
      mean: summary1[10].mean,
    },
    {
      name: Data1[11].name,
      active: summary1[11].activity,
      context: summary1[11].context,
      mean: summary1[11].mean,
    },
    {
      name: Data1[12].name,
      active: summary1[12].activity,
      context: summary1[12].context,
      mean: summary1[12].mean,
    },
    {
      name: Data1[13].name,
      active: summary1[13].activity,
      context: summary1[13].context,
      mean: summary1[13].mean,
    },
    {
      name: Data1[14].name,
      active: summary1[14].activity,
      context: summary1[14].context,
      mean: summary1[14].mean,
    },
    {
      name: Data1[15].name,
      active: summary1[15].activity,
      context: summary1[15].context,
      mean: summary1[15].mean,
    },
    {
      name: Data1[16].name,
      active: summary1[16].activity,
      context: summary1[16].context,
      mean: summary1[16].mean,
    },
    {
      name: Data1[17].name,
      active: summary1[17].activity,
      context: summary1[17].context,
      mean: summary1[17].mean,
    },
  ];
  function mycomparator(a, b) {
    return parseFloat(a.mean) - parseFloat(b.mean);
  }

  const sort2 = sort1.sort(mycomparator);

  const data = {
    labels: [
      sort2[0].name,
      sort2[1].name,
      sort2[2].name,
      sort2[3].name,
      sort2[4].name,
      sort2[5].name,
      sort2[6].name,
      sort2[7].name,
      sort2[8].name,
      sort2[9].name,
      sort2[10].name,
      sort2[11].name,
      sort2[12].name,
      sort2[13].name,
      sort2[14].name,
      sort2[15].name,
      sort2[16].name,
      sort2[17].name,
    ],
    datasets: [
      {
        label: "มิติกิจกรรมการทำงาน",
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
        barThickness: 6,
        barPercentage: 0.25,
        hoverBackgroundColor: "#FF6384",
        hoverBorderColor: "#FF6384",
        data: [
          sort2[0].active,
          sort2[1].active,
          sort2[2].active,
          sort2[3].active,
          sort2[4].active,
          sort2[5].active,
          sort2[6].active,
          sort2[7].active,
          sort2[8].active,
          sort2[9].active,
          sort2[10].active,
          sort2[11].active,
          sort2[12].active,
          sort2[13].active,
          sort2[14].active,
          sort2[15].active,
          sort2[16].active,
          sort2[17].active,
        ],
      },
      {
        label: "มิติบริบทการทำงาน",
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
        barThickness: 6,
        barPercentage: 0.25,
        hoverBackgroundColor: "#36A2EB",
        hoverBorderColor: "#36A2EB",
        data: [
          sort2[0].context,
          sort2[1].context,
          sort2[2].context,
          sort2[3].context,
          sort2[4].context,
          sort2[5].context,
          sort2[6].context,
          sort2[7].context,
          sort2[8].context,
          sort2[9].context,
          sort2[10].context,
          sort2[11].context,
          sort2[12].context,
          sort2[13].context,
          sort2[14].context,
          sort2[15].context,
          sort2[16].context,
          sort2[17].context,
        ],
      },
      {
        label: "ค่าเฉลีย",
        backgroundColor: "#FFCE56",
        borderColor: "#FFCE56",
        borderWidth: 1,
        barThickness: 10,
        barPercentage: 0.5,
        hoverBackgroundColor: "#FFCE56",
        hoverBorderColor: "#FFCE56",
        data: [
          sort2[0].mean,
          sort2[1].mean,
          sort2[2].mean,
          sort2[3].mean,
          sort2[4].mean,
          sort2[5].mean,
          sort2[6].mean,
          sort2[7].mean,
          sort2[8].mean,
          sort2[9].mean,
          sort2[10].mean,
          sort2[11].mean,
          sort2[12].mean,
          sort2[13].mean,
          sort2[14].mean,
          sort2[15].mean,
          sort2[16].mean,
          sort2[17].mean,
        ],
      },
    ],
  };
  

  return (
    <div className="flex flex-col items-center w-full max-w-md">
      <div className="table">
        <center>
          <table>
            <tr>
              <td>
                <StopRoundedIcon
                  style={{
                    background: "#FF6384",
                    color: "#FF6384",
                    fontSize: "12px",
                  }}
                />
              </td>
              <td
                style={{
                  textalign: "start",
                  color: "darkslategray",
                  fontweight: "400",
                  fontSize: "12px",
                }}
              >
                มิติกิจกรรมการทำงาน
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <StopRoundedIcon
                  style={{
                    background: "#36A2EB",
                    color: "#36A2EB",
                    fontSize: "12px",
                  }}
                />
              </td>
              <td
                style={{
                  textalign: "start",
                  color: "darkslategray",
                  fontweight: "400",
                  fontSize: "12px",
                }}
              >
                มิติบริบทการทำงาน
              </td>
            </tr>
            <tr>
              <td>
                <StopRoundedIcon
                  style={{
                    background: "#FFCE56",
                    color: "#FFCE56",
                    fontSize: "12px",
                  }}
                />
              </td>
              <td
                style={{
                  fontsize: "12px",
                  textalign: "start",
                  color: "darkslategray",
                  fontweight: "400",
                  fontSize: "12px",
                }}
              >
                ค่าเฉลีย
              </td>
            </tr>
          </table>
        </center>
      </div>

      <HorizontalBar
        data={data}
        width={600}
        height={560}
        options={{
          scales: {
            xAxes: [
              {
                ticks: {
                  stepSize: 0.1,
                  callback: function(value, index, values) {
                    if ((value) < -0.3) {
                      return value;
                  }
                    if ((value) === -0.3) {
                        return value;
                    }
                    if ((value) === -0.1) {
                      return value;
                  }if ((value) === 0) {
                    return value;
                }
                if ((value) === 0.1) {
                  return value;
              }if ((value) === 0.3) {
                return value;
            } if ((value) > 0.3) {
              return value;
          }
          }
                },
                gridLines: {
                  lineWidth: 3,
                 
                  zeroLineColor: "#FFF",
                  zeroLineWidth: 2,
                },
              },{  gridLines: {
                drawBorder:false,
                drawTicks:false,
                offsetGridLines:true,
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              }, ticks: {
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0
              },afterTickToLabelConversion: function(data){

            
                var xLabels = data.ticks;
            
                xLabels.forEach(function (labels, i) {
               
                    if ( i===0 ){
                     return xLabels[i] = "ไม่เหมาะสม";

                    }
                    if (i  === 17){
                      return xLabels[i] = "เหมาะสม";

                  }else{
                   return xLabels[i] = "";
                  }
                
                });
            } },
            ],
            
          },
          legend: {
            display: false,
            position: "top",
          },
        }}
      />
 
    </div>
  );
};
export default ChartPage;
