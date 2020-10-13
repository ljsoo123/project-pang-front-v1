import React, { useState } from "react";
import * as S from "./styles";
import BuyContents from "./BuyContents";
const Buy = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "방울토마토",
      price: "2000",
      unit: "200g",
      locate: "강원도 강릉시",
    },
    {
      id: 2,
      name: "감자",
      price: "3000",
      unit: "500g",
      locate: "경기도 의정부시",
    },
    {
      id: 3,
      name: "오이",
      price: "5000",
      unit: "10개",
      locate: "대전광역시 유성구",
    },
    {
      id: 4,
      name: "양배추",
      price: "700",
      unit: "개",
      locate: "충청남도 홍성군",
    },
    {
      id: 5,
      name: "양배추",
      price: "700",
      unit: "개",
      locate: "충청남도 홍성군",
    },
    {
      id: 6,
      name: "양배추",
      price: "700",
      unit: "개",
      locate: "충청남도 홍성군",
    },
  ]);
  return (
    <S.MainDiv>
      <BuyContents product={product} />
    </S.MainDiv>
  );
};
export default Buy;
