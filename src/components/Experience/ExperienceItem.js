import React from 'react'
import * as S from './styles'
import farmer from './farmer.jpg'
const ExperienceItem = ({users}) => {
    console.log(users)
    const {exname, exwhere, price, userid, endtime} = users;
    return(
        <S.ExperienceItemMain>
            <img src={farmer}></img>
            <div id="title">{users.exname}</div>
            <div>{users.exwhere}</div>
            <div>{users.price}</div>
            <div>{users.userid}</div>
            <div>{users.endtime}</div>
        </S.ExperienceItemMain>
    )
}

export default ExperienceItem;