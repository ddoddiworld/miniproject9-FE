import React, { useEffect } from "react";
import {
  Main,
  MainWarp,
  Title,
  SubTitle,
  StyledBtn,
  Moon,
  Star,
  SideOverlay,
} from "./styles";
import moon from "../images/moon2.png";
import star from "../images/star2.png";
import User from "../User/User";
import WriteModal from "../Modal/WriteModal";
import ViewModal from "../Modal/ViewModal";
import { useState } from "react";
import { isUserLoggedIn } from "../../../token/token";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import { getCookie } from "../../../token/token";

const START_STYLES = [
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

function LoginedBody() {
  // 덕담 가져오기
  const { receiverId } = useParams();
  const [duckdomData, setDuckdamData] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openDuckdomModal, setOpenDuckdomModal] = useState(false);
  const navigate = useNavigate();

  const refreshToken = getCookie("refreshToken");
  const accessToken = getCookie("accessToken");

  const userId = jwt_decode(accessToken).userId;
  const currentURL = window.location.pathname;
  const isUserPage = currentURL === `/${userId}`;

  const close = () => {
    setShowOverlay(false);
    setOpenDuckdomModal(false);
    setOpenViewModal(false);
  };

  const giveDuckdom = () => {
    setShowOverlay(true);
    setOpenDuckdomModal(true);
  };

  const showDuckdom = () => {
    setShowOverlay(true);
    setOpenViewModal(true);
  };

  useEffect(() => {
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

      if (response.status === 200) {
        setDuckdamData(response.data.data);
      }
      // console.log(response);
      // } catch (error) {
      //   alert(`[글 가져오기 실패]\n${error.message}`);
      //   console.error("글 가져오기 실패! :", error.message);
      // }
    };
    console.log(
      "userId : ",
      userId,
      " receiverId : ",
      receiverId,
      " isEquals? : " + userId === receiverId
    );
    if (Number(userId) === Number(receiverId)) {
      receiveDuckdam();
    }
  }, []);

  // 랜덤 페이지 이동하기
  const random = async () => {
    try {
      const response = await axios.get(`http://54.180.87.103:4000/api/random`, {
        headers: {
          Authorization: `${refreshToken}`,
        },
      });

      if (response.status === 200) {
        navigate(`/${response.data.data.userId}`);
      }
    } catch (error) {
      alert(`[페이지 이동 실패]\n${error.message}`);
      console.log(error);
    }
  };

  return (
    <>
      <Main>
        <MainWarp>
          <Title>{receiverId}의 달</Title>
          <SubTitle>고마운 마음을 담아 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            {/* 덕담 보기 */}
            {showOverlay && <SideOverlay onClick={close} />}
            {duckdomData.slice(0, 10).map((item, index) => {
              const starStyles = START_STYLES[index]; // 별 갯수만큼 화면에 나타내기

              return (
                <ViewModal
                  starStyles={starStyles}
                  close={close}
                  signOpen={showDuckdom}
                  duckdomData={item}
                />
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
          <StyledBtn onClick={random} size={"small"}>
            랜덤
          </StyledBtn>

          <User></User>
        </MainWarp>
      </Main>
    </>
  );
}

export default LoginedBody;
