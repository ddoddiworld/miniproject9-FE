import React, { useEffect } from "react";
import styles from "./styles";
import moon from "../images/moon2.png";
import star from "../images/star2.png";
import User from "../User/User";
import WriteModal from "../Modal/WriteModal";
import ViewModal from "../Modal/ViewModal";
import { useState } from "react";
import { isUserLoggedIn } from "../../../token/token";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import { getCookie } from "../../../token/token";

function LoginedBody() {
  /***********************
    공통
  ***********************/
  // 스타일
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

  // 오버레이
  const [showOverlay, setShowOverlay] = useState(false);

  // 모달창 닫기
  const close = () => {
    setShowOverlay(false);
    setOpenDuckdomModal(false);
    setOpenViewModal(false);
  };

  // 덕담 작성
  const [openDuckdomModal, setOpenDuckdomModal] = useState(false);
  const giveDuckdom = () => {
    setShowOverlay(true);
    setOpenDuckdomModal(true);
  };

  // 덕담 보기
  const [openViewModal, setOpenViewModal] = useState(false);
  const showDuckdom = () => {
    setShowOverlay(true);
    setOpenViewModal(true);
    receiveDuckdam();
  };

  // 덕담 가져오기
  const { receiverId } = useParams();
  const [duckdomData, setDuckdamData] = useState([]);
  console.log("받은 덕담들:", duckdomData.length);

  // 토큰 가져오기 (access, refresh)
  const refreshToken = getCookie("refreshToken"); // 0923 accessToken으로는 인증 불가로 refreshToken으로 인증
  const accessToken = getCookie("accessToken");
  const userId = jwt_decode(accessToken).userId; // 로그인한 사용자 ID
  console.log(`현재 당신의 userId는 ${userId} 입니다.`);

  const receiveDuckdam = async () => {
    // try {
    // 요청 받기
    const response = await axios.get(
      `http://54.180.87.103:4000/api/receive/${receiverId}`,
      {
        headers: {
          Authorization: `${refreshToken}`,
        },
      }
    );
    console.log("서버 응답:", response.data.data);
    console.log(response.status);

    if (response.status === 200) {
      setDuckdamData(response.data.data);
    }
    // } catch (error) {
    //   alert(`[글 가져오기 실패]\n${error.message}`);
    //   console.error("글 가져오기 실패! :", error.message);
    // }
  };

  useEffect(() => {
    receiveDuckdam();
  }, []);

  // 본인 덕담 페이지에서는 덕담 쓰기 버튼 숨기게
  const currentURL = window.location.pathname;
  const isUserPage = currentURL === `/${userId}`;

  return (
    <>
      <Main>
        <MainWarp>
          <Title>{userId}의 달</Title>
          <SubTitle>고마운 마음을 담아 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            {/* 덕담 보기 */}
            {showOverlay && <SideOverlay onClick={close} />}
            {openViewModal && (
              <>
                <ViewModal
                  close={close}
                  signOpen={showDuckdom}
                  duckdomData={duckdomData}
                ></ViewModal>
              </>
            )}
            {duckdomData.slice(0, 10).map((item, index) => {
              const starStyles = starts[index]; // 별 갯수만큼 화면에 나타내기
              console.log("item", item);
              return (
                <Star
                  src={star}
                  onClick={() => showDuckdom(item)}
                  key={item.postId}
                  style={starStyles}
                  {...item}
                ></Star>
              );
            })}
          </div>

          {/* 덕담 주기 */}
          {showOverlay && <SideOverlay onClick={close} />}
          {openDuckdomModal && (
            <>
              <WriteModal close={close} signOpen={giveDuckdom}></WriteModal>
            </>
          )}
          {!isUserPage && (
            <StyledBtn size={"medium"} onClick={giveDuckdom}>
              덕담 나눠주기
            </StyledBtn>
          )}

          {/* 랜덤방문 */}
          <StyledBtn size={"small"}>랜덤</StyledBtn>

          <User></User>
        </MainWarp>
      </Main>
    </>
  );
}

export default LoginedBody;
