import React from "react";
import styles from "./styles";
import moon from "../images/moon2.png";
import star from "../images/star2.png";
import User from "../User/User";
import LoginModal from "../Modal/LoginModal";
import { useState } from "react";

function Body() {
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

  // 별 위치 position
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

  // 로그인
  const [openModal, setOpenModal] = useState(false);
  const [showOverlay, setshowOverlay] = useState(false);

  const logIn = () => {
    setshowOverlay(true);
    setOpenModal(true);
  };

  const close = () => {
    setshowOverlay(false);
    setOpenModal(false);
  };

  // 덕담 나눠주기
  const giveDuckdom = () => {
    alert("현재 준비 중이에요! 😉");
  };

  // 별 추가
  const addStar = () => {
    alert("별을 누르면 받은 글을 볼 수 있어요.");
  };

  return (
    <>
      {/* 로그인 안된 상태 */}
      <Main>
        <MainWarp>
          <Title>토끼의 발자국</Title>
          <SubTitle>고마운 마음을 담아 서로에게 덕담 한마디 어떨까요?</SubTitle>
          {showOverlay && <SideOverlay onClick={close} />} {/* 오버레이 표시 */}
          {openModal && (
            <>
              <LoginModal></LoginModal>
            </>
          )}
          <div>
            <Moon src={moon} alt="moon"></Moon>
            {starts.map((item, index) => {
              return <Star src={star} key={index} {...item}></Star>;
            })}
          </div>
          <StyledBtn size={"medium"} onClick={logIn}>
            로그인
          </StyledBtn>
          <User></User>
        </MainWarp>
      </Main>

      {/* 로그인이 되어 있는 상태 */}
      {/* <Main>
        <MainWarp>
          <Title>토끼의 발자국</Title>
          <SubTitle>고마운 마음을 담아 서로에게 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            {starts.map((item, index) => {
              return (
                <Star src={star} onClick={addStar} key={index} {...item}></Star>
              );
            })}
          </div>

          <StyledBtn size={"medium"} onClick={giveDuckdom}>
            덕담 나눠주기
          </StyledBtn>
          <StyledBtn size={"small"}>랜덤</StyledBtn>

          <User></User>
        </MainWarp>
      </Main> */}
    </>
  );
}

export default Body;
