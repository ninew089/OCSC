import React from "react";
import styled from "styled-components";
import "../../App.css";
export default function Cell({ text, style }) {
  return <SCell style={style}>{text}</SCell>;
}

const SCell = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 0.2px solid #2c2626;
  text-align: initial;
  padding-left: 8px;
  font-size: 14px;
`;
