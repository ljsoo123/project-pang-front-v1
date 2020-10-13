import styled, {createGlobalStyle} from 'styled-components'

export const Main = styled.div`
    width : 80%;
    margin : 0 auto;
`
export const MainDiv = styled.div`
    @font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }@font-face { font-family: 'JSDongkang-Regular'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/JSDongkang-RegularA1.woff') format('woff'); font-weight: normal; font-style: normal; }
    display : flex;
    justify-content :flex-end;
    align-items : center;
    margin-top : 20px;
    >div>select{
        font-family : JSDongkang-Regular;
        font-size : 20px;
        border : none;
        margin : 10px;
    }
`

export const ExperienceItemMain = styled.div`
    font-size : 11px;
    margin : 10px;
    width : 20%;
    border : 1px solid #DADADA;
    height : 300px;
    >img{
        width : 100%;
        height : 150px;
    }
    #title{
        font-size : 17px;
        font-family : JSDongkang-Regular;
        text-align : center;
    }
`
export const ExperienceItem = styled.div`
    background-color : black;
`

export const ExperienceMainDiv = styled.div`
    display : flex;
    width : 100%;
    flex-wrap : wrap;
    align-items : center;
    justify-content : center;
`