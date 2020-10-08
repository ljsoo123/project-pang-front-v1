import React, {useState} from 'react'
import * as S from './loginheaderstyle';
const LoginHeader = ({isLoggedin}) => {
    const [loginCheck, setloginCheck] = useState(isLoggedin);
    const onLoginCheck = () =>{
        setloginCheck(!loginCheck);
    }
    return(
        <S.Maindiv>
            <S.NoLoginText onClick={onLoginCheck}>
                {loginCheck ? 
                <>
                    <div>로그아웃</div>
                    <div>마이페이지</div>
                </>:
                <>
                    <div>로그인</div>
                    <div>회원가입</div>
                </>}
            </S.NoLoginText>
        </S.Maindiv>
    )
}

export default LoginHeader;