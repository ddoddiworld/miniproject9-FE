import React from "react";
import styles from "./styles";
import moon from "../images/moon2.png";
import star from "../images/star2.png";
import User from "../User/User";

function Body() {
  const { Main, MainWarp, Title, SubTitle, Logout, DukdamBtn, Moon, Star } =
    styles;

  const starts = [
    { src: "./img/star2.png", top: "20%", width: "120px", alt: "star1" },
    { src: "./img/star2.png", top: "30%", width: "130px", alt: "star2" },
  ];

  return (
    <>
      {/* 로그인 안된 상태 */}
      <Main>
        <MainWarp>
          <Title>토끼의 발자국 122333</Title>
          <SubTitle>고마운 마음을 담아 서로에게 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            {/* 오른쪽별 */}
            <Star src={star} top="19%" right="20%" alt="star"></Star>
            <Star
              src={star}
              top="30%"
              right="10%"
              width="60px"
              alt="star"
            ></Star>
            <Star
              src={star}
              top="43%"
              right="12%"
              width="80px"
              alt="star"
            ></Star>
            <Star
              src={star}
              top="55%"
              right="25%"
              width="80px"
              alt="star"
            ></Star>
            <Star
              src={star}
              top="65%"
              right="10%"
              width="120px"
              alt="star"
            ></Star>

            {/* 왼쪽별 */}
            <Star src={star} top="" left="10%" alt="star"></Star>
            <Star
              src={star}
              top="22%"
              left="32%"
              width="60px"
              alt="star"
            ></Star>
            <Star
              src={star}
              top="55%"
              left="15%"
              width="60px"
              alt="star"
            ></Star>
            <Star
              src={star}
              top="38%"
              left="25%"
              width="80px"
              alt="star"
            ></Star>
            <Star src={star} top="65%" left="27%" alt="star"></Star>
          </div>

          <DukdamBtn>로그인</DukdamBtn>

          <User></User>
        </MainWarp>
      </Main>

      {/* 로그인이 되어 있는 상태 */}
      {/* <Main>
        <MainWarp>
          <Logout>로그아웃</Logout>
          <Title>토끼의 발자국</Title>
          <SubTitle>고마운 마음을 담아 서로에게 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            {starts.map((item, index) => {
              <Star key={index} {...item}></Star>;
            })}
          </div>

          <DukdamBtn>덕담 나눠주기</DukdamBtn>

          <User></User>
        </MainWarp>
      </Main> */}
    </>
  );
}

export default Body;
