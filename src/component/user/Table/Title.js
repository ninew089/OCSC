import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

export default function Title() {
  return (
    <SRow>
      <Cell
        text={""}
        style={{
          background: "white",
          alginItem: "start",
          width: 200,
        }}
      />

      <Cell
        text={"กิจกกรมการทำงาน"}
        style={{
          alginItem: "center",
          background: "white",
        }}
      />
      <Cell
        text={"บริบทการทำงาน"}
        style={{
          alginItem: "center",
          background: "white",
        }}
      />
      <Cell
        text={"ค่าเฉลี่ย"}
        style={{
          alginItem: "center",
          background: "white",
        }}
      />
    </SRow>
  );
}

const SRow = styled.div`
  display: flex;
  width: fit-content;
`;
