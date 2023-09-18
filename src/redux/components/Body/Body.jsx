import React from "react";
import styles from "./styles";
import moon from "../images/moon2.png";
import star from "../images/star2.png";
import User from "../User/User";

function Body() {
  const { Main, MainWarp, Title, SubTitle, Logout, DukdamBtn, Moon, Star } =
    styles;

  return (
    <>
      {/* 로그인 안된 상태 */}
      <Main>
        <MainWarp>
          <Title>토끼의 발자국</Title>
          <SubTitle>고마운 마음을 담아 서로에게 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            <Star src={star} top="20%" alt="star"></Star>
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
            <Star src={star} top="20%" alt="star"></Star>
          </div>

          <DukdamBtn>덕담 나눠주기</DukdamBtn>
        </MainWarp>
      </Main> */}
    </>
  );
}

export default Body;
