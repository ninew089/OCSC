import React from "react";
import styled from "styled-components";
import Row from "./Row";
import Title from "./Title";
import "./Table.css";

export default function Table({ data }) {
  const [datas] = React.useState(data);
  const renderRows = () => {
    return datas.map((data) => {
      return (
        <Row
          key={data.name}
          name={data.name}
          activity={data.activity}
          context={data.context}
          mean={data.mean}
          rate={data.rate}
        />
      );
    });
  };

  return (
    <STable>
      <Title />

      {renderRows()}
    </STable>
  );
}

const STable = styled.div`
  width: fit-content;
  align-items: "start";
  font-family: "Prompt", sans-serif;
`;
