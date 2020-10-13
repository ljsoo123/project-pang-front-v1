import styled from "styled-components";

export const MainDiv = styled.div`
  @font-face {
    font-family: "JSDongkang-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  width: 90%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

export const BuyItemMain = styled.div`
  border: 1px solid #a0a0a0;
  width: 30%;
  margin: 15px;
  height: 750px;
  > img {
    height: 600px;
    width: 100%;
    margin-bottom: 15px;
  }
  font-family: JSDongkang-Regular;
  #name {
    font-size: 30px;
  }
  #price {
    font-size: 20px;
    color: #219f70;
  }
  #locate {
    font-size: 15px;
  }
  > div {
    margin: 5px;
  }
`;
