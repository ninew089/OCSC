import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

export default function Row(props) {
  const { name, activity, context, mean } = props;
  function getRate(key) {
    var check = parseFloat(key);
    if (check <= -0.3) {
      return "1";
    }
    if (check > -0.3 && check <= -0.1) {
      return "2";
    }
    if (check > -0.1 && check < 0.1) {
      return "3";
    }
    if (check >= 0.1 && check < 0.3) {
      return "4";
    }
    if (check >= 0.3) {
      return "5";
    }
  }
  const getColor = (key) => {
    switch (getRate(key)) {
      case "1":
        return "#d32f2f";
      case "2":
        return "#ffb300";

      case "3":
        return "#ffffff";
      case "4":
        return "#3f51b5";
      case "5":
        return "#002984";
      default:
        return "white";
    }
  };

  const getTextColor = (key) => {
    switch (getRate(key)) {
      case "1":
        return "#ffffff";
      case "2":
        return "#1b1b1b";

      case "3":
        return "#1b1b1b";
      case "4":
        return "#ffffff";
      case "5":
        return "#ffffff";
      default:
        return "black";
    }
  };

  return (
    <SRow>
      <Cell
        text={name}
        style={{
          background: "white",
          alginItem: "start",
          width: 200,
        }}
      />

      <Cell
        text={activity}
        style={{
          alginItem: "center",
          background: getColor(activity),
          color: getTextColor(activity),
        }}
      />
      <Cell
        text={context}
        style={{
          alginItem: "center",
          background: "white",
        }}
      />
      <Cell
        text={mean}
        style={{
          alginItem: "center",
          background: getColor(mean),
          color: getTextColor(mean),
        }}
      />
    </SRow>
  );
}

const SRow = styled.div`
  display: flex;
  width: fit-content;
`;
