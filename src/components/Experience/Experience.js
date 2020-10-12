import React from 'react'
import ExperienceContents from './ExperienceContents';
import * as S from './styles'
const city = function city(e){
    console.log('asasd')
    var kyunggi = ['수원', '성남', '안양', '안산', '용인', '부천', '광명', '평택', '과천', '오산', '시흥', '군포', '의왕', '하남', '이천', '안성', '김포', '화성', '광주', '여주', '고양', '의정부', '동두천', '구리', '남양주', '파주', '양주', '포천', '양평', '연천', '가평'];
    var kangwon = ['춘천', '원주', '강릉', '동해', '태백', '속초', '삼척', '홍천', '횡성', '영월', '평창', '정선', '철원', '화천', '양구', '인제', '고성', '양양'];
    var choongchung = ['청주', '충주', '제천', '천안', '공주', '보령', '아산', '서산', '논산', '계룡', '당진', '보은', '옥천', '영동', '증평', '진천', '괴산', '음성', '단양', '금산', '부여', '서천', '청양', '홍성', '예산', '태안'];
    var jeonla = ['전주', '군산', '익산', '정읍', '남원', '김제', '완주', '진안', '무주', '장수', '임실', '순창', '고창', '부안', '목포', '여수', '순천', '나주', '광양', '담양', '곡성', '구례', '고흥', '보성', '화순', '장흥', '강진', '해남', '영암', '무안', '함평', '영광', '장성', '완도', '진도', '신안'];
    var kyungsang =['포항', '경주', '김천', '안동', '구미', '영주', '영천', '상주', '문경', '경산', '군위', '의성', '청송', '영양', '영덕', '청도', '고령', '성주', '칠곡', '예천', '봉화', '울진', '울릉', '창원', '진주', '통영', '사천', '김해', '밀양', '거제', '양산', '의령', '함안', '창녕', '고성', '남해', '하동', '산청', '함양', '거창', '합천'];
    var jeju = ['제주', '서귀포']; 
    var target = document.getElementById('smallcity');
    var select;
    console.log(e.target.value)
    if(e.target.value === 'kyunggi') select = kyunggi;
    else if(e.target.value === 'kangwon') select = kangwon;
    else if(e.target.value === 'choongchung') select = choongchung;
    else if(e.target.value === 'jeonla') select = jeonla;
    else if(e.target.value === 'kyungsang') select = kyungsang;
    else if(e.target.value === 'jeju') select = jeju;
    else select = null;
    console.log(select)
    target.options.length = 0;

    for(var x in select){
        var opt = document.createElement('option');
        opt.value = select[x];
        opt.innerHTML = select[x];
        target.appendChild(opt);
    }
}

const Experience = () => {
    return(
        <>
        <S.MainDiv>
            <div>
                    <label for="bigcity"></label>
                    <select name = "bigcity" id="bigcity" className="bigcity" onChange = {city}>
                        <option>도&middot;광역시</option>
                        <option>서울특별시</option>
                        <option>부산광역시</option>
                        <option>대구광역시</option>
                        <option>인천광역시</option>
                        <option>광주광역시</option>
                        <option>대전광역시</option>
                        <option>울산광역시</option>
                        <option>세종특별자치시</option>
                        <option value="kyunggi">경기도</option>
                        <option value="kangwon">강원도</option>
                        <option value="choongchung">충청도</option>
                        <option value="jeonla">전라도</option>
                        <option value="kyungsang">경상도</option>
                        <option value="jeju">제주도</option>
                    </select>
                </div>
                <div>
                    <select name="smallcity" id="smallcity" className="smallcity">
                        <option>시&middot;군&middot;구</option>
                    </select>
                </div>
                <div>
                    <select name="sortlist" id="sortlist" className="sortlist">
                        <option>인기순</option>
                        <option>마감순</option>
                        <option>최신순</option>
                        <option>오래된순</option>
                    </select>
                </div>
            </S.MainDiv>
            <ExperienceContents/>
        </>
    )   
}

export default Experience;