import React from "react";
import styles from "./styles";
import moon from "../images/moon2.png";
import star from "../images/star2.png";
import LoginModal from "../Modal/LoginModal";
import SignUpModal from "../Modal/SignUpModal";
import { useState } from "react";

function Body() {
  //* 스타일
  const {
    Main,
    MainWarp,
    Title,
    SubTitle,
    StyledBtn,
    Moon,
    Star,
    SideOverlay,
  } = styles;

  //* 별 위치 position : 디자인을 위해 random을 사용하지 않고 위치를 미리 지정해 둠
  const starts = [
    { top: "19%", right: "20%", width: "100px" },
    { top: "30%", right: "10%", width: "60px" },
    { top: "43%", right: "12%", width: "80px" },
    { top: "55%", right: "25%", width: "80px" },
    { top: "65%", right: "10%", width: "120px" },

    { top: "auto", left: "10%", width: "100px" },
    { top: "22%", left: "32%", width: "60px" },
    { top: "55%", left: "15%", width: "60px" },
    { top: "38%", left: "25%", width: "80px" },
    { top: "65%", left: "27%", width: "120px" },
  ];

  //* 오버레이
  const [showOverlay, setshowOverlay] = useState(false);

  //* 모달창 닫기
  const close = () => {
    setshowOverlay(false);
    setopenLoginModal(false);
    setopenSignModal(false);
  };

  //* 로그인 모달창
  const [openLoginModal, setopenLoginModal] = useState(false);

  const loginOpen = () => {
    setshowOverlay(true);
    setopenLoginModal(true);
  };

  //* 회원가입 모달창
  const [openSignModal, setopenSignModal] = useState(false);

  const signOpen = () => {
    setshowOverlay(true);
    setopenSignModal(true);
  };

  return (
    <>
      <Main>
        <MainWarp>
          <Title>토끼의 발자국</Title>
          <SubTitle>고마운 마음을 담아 서로에게 덕담 한마디 어떨까요?</SubTitle>
          {showOverlay && <SideOverlay onClick={close} />}
          {openLoginModal && (
            <>
              <LoginModal close={close} signOpen={signOpen}></LoginModal>
            </>
          )}
          {openSignModal && (
            <>
              <SignUpModal close={close} loginOpen={loginOpen}></SignUpModal>
            </>
          )}
          <div>
            <Moon src={moon} alt="moon"></Moon>
            {/* 받은 덕담만큼 star 컴포넌트 화면에 나타내기 */}
            {starts.map((item, index) => {
              return <Star src={star} key={index} {...item}></Star>;
            })}
          </div>
          <StyledBtn size={"medium"} onClick={loginOpen}>
            로그인
          </StyledBtn>
        </MainWarp>
      </Main>
    </>
  );
}

export default Body;
