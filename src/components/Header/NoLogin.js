import React from 'react'
import * as S from './loginstyle';
const NoLogin = () => {
    return(
        <S.MainDiv>
            <S.NoLoginText>
                <div>로그인</div>
                <div>회원가입</div>
            </S.NoLoginText>
        </S.MainDiv>
    )
}

export default NoLogin;