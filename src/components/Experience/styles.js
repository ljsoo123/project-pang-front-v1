import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const MainDiv = styled.div`
  @font-face {
    font-family: "JSDongkang-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "JSDongkang-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  > div > select {
    font-family: JSDongkang-Regular;
    font-size: 20px;
    border: none;
    margin: 10px;
  }
`;

export const ExperienceItemMain = styled.div`
  font-size: 11px;
  margin: 10px;
  width: 20%;
  border: 1px solid #dadada;
  height: 220px;
  justify-content: space-between;
  > img {
    width: 100%;
    height: 150px;
  }
  #title {
    font-size: 17px;
    font-family: JSDongkang-Regular;
    text-align: center;
  }
`;

export const ExperienceMainDiv = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const InnerExperience = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 20px;
  font-family: JSDongkang-Regular;
  font-size: 11px;
  > div #price {
    color: #219f70;
  }
`;
