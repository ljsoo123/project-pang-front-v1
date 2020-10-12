import styled, {createGlobalStyle} from 'styled-components'


export const MainDiv = styled.div`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }@font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
    justify-content :right;
    margin : 0 auto;
    width : 50%;
    height : 100%;
    display : flex;
    margin-top : 40px;
    >div{
        justify-content : right;
        display : inline;
        margin-right : 10px;
        width : 30%;
        >select{
            border : none;
            font-family : JSDongkang-Regular;
            font-size : 20px;
        }
    }
`

export const ExperienceDiv = styled.div`
    width : 20%;
    background-color:black;
`