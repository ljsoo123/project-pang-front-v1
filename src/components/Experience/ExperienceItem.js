import React from "react";
import * as S from "./styles";
import farmer from "./farmer.jpg";
const ExperienceItem = ({ users }) => {
  console.log(users);
  const { exname, exwhere, price, endtime } = users;
  return (
    <S.ExperienceItemMain>
      <img src={farmer}></img>
      <div id="title">{users.exname}</div>
      <S.InnerExperience>
        <div>
          <div id="price">{users.price}원</div>
          <div id="exwhere">{users.exwhere}</div>
        </div>
        <div id="endtime">{users.endtime}</div>
      </S.InnerExperience>
    </S.ExperienceItemMain>
  );
};

export default ExperienceItem;
