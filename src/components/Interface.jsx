import React from "react";
import { useSelector } from "react-redux";
import { selectObrasData } from "../redux/obrasSlice";

const Interface = () => {
  const obrasData = useSelector(selectObrasData);
  console.log(obrasData);
  return <></>;
};

export default Interface;
