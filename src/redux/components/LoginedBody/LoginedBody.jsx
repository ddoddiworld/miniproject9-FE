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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const START_STYLES = [
  { top: "auto", left: "10%", width: "100px" }, // 왼1
  { top: "30%", right: "10%", width: "60px" }, // 오2
  { top: "55%", left: "15%", width: "60px" }, // 왼3
  { top: "38%", left: "25%", width: "80px" }, // 왼4
  { top: "65%", left: "27%", width: "120px" }, // 왼5

  { top: "19%", right: "20%", width: "100px" }, // 오1
  { top: "22%", left: "32%", width: "60px" }, // 왼2
  { top: "43%", right: "12%", width: "80px" }, // 오3
  { top: "55%", right: "25%", width: "80px" }, // 오4
  { top: "65%", right: "10%", width: "120px" }, // 오5
];

function LoginedBody() {
  // 덕담 가져오기
  const { receiverId } = useParams();
  const [duckdomData, setDuckdamData] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openDuckdomModal, setOpenDuckdomModal] = useState(false);
  const [nickName, setNickName] = useState("");
  const [randomNickname, setRandomNickname] = useState("");
  const [randomLength, setRandomLength] = useState(0);
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

  // 닉네임 불러오기
  useEffect(() => {
    const myName = async () => {
      const response = await axios.get("http://54.180.87.103:4000/api/mypage", {
        headers: {
          Authorization: `${accessToken}`,
        },
      });
      // console.log("당신의 닉네임은? :", response.data.data.nickname);
      setNickName(response.data.data.nickname);
    };
    myName();
  }, []);

  // 덕담 불러오기
  useEffect(() => {
    const receiveDuckdam = async () => {
      const response = await axios.get(
        `http://54.180.87.103:4000/api/receive/${receiverId}`,
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        setDuckdamData(response.data.data);
      }
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

  // 랜덤 페이지 이동하기 & 닉네임도 같이 바뀌게 하기
  const random = async () => {
    const response = await axios.get("http://54.180.87.103:4000/api/random", {
      headers: {
        Authorization: `${accessToken}`,
      },
    });

    console.log("랜덤 페이지 이동:", response.data);
    if (response.status === 200) {
      navigate(`/${response.data.data.userId}`); // 랜덤 유저 방문
      setNickName(response.data.data.nickname); // 랜덤 유저의 닉네임 가져오기
      randomStar(); // 랜덤 유저의 별 갯수 가져오기
    } else {
      alert("[페이지 이동 오류] 페이지 이동을 할 수 없습니다!");
    }
  };

  // 랜덤 페이지에 대한 별 갯수 가져오기
  const randomStar = async () => {
    const response = await axios.get(
      `http://54.180.87.103:4000/api/allposts/${receiverId}`,
      {
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );

    if (response.status === 200) {
      setRandomLength(response.data.data.length);
    }
  };

  // 마이 페이지 이동하기 -> 한번더 mypage api 실행
  const goHome = async () => {
    try {
      const response = await axios.get("http://54.180.87.103:4000/api/mypage", {
        headers: {
          Authorization: `${accessToken}`,
        },
      });

      if (response.status === 200) {
        navigate(`/${userId}`);
        setNickName(response.data.data.nickname); // 내 페이지의 닉네임 재설정
      }
    } catch (error) {
      alert(`[마이 페이지 이동 오류]\n${error.message}`);
      console.error("마이 페이지 이동 실패! :", error.message);
    }
  };

  return (
    <>
      <Main>
        <MainWarp>
          <Title>{nickName}의 달</Title>
          <SubTitle>고마운 마음을 담아 덕담 한마디 어떨까요?</SubTitle>

          <div>
            <Moon src={moon} alt="moon"></Moon>
            {/* 덕담 보기 */}
            {showOverlay && <SideOverlay onClick={close} />}
            {true
              ? duckdomData.slice(0, 10).map((item, index) => {
                  const starStyles = START_STYLES[index]; // 별 갯수만큼 화면에 나타내기

                  return (
                    <ViewModal
                      starStyles={starStyles}
                      close={close}
                      signOpen={showDuckdom}
                      duckdomData={item}
                    />
                  );
                })
              : new Array(randomLength)
                  .slice(0, 10)
                  .fill(undefined)
                  .map((item, index) => {
                    const starStyles = START_STYLES[index]; // 별 갯수만큼 화면에 나타내기

                    return (
                      <ViewModal
                        starStyles={starStyles}
                        // close={close}
                        // signOpen={showDuckdom}
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
            <>
              {/* 덕담 나눠주기 버튼 */}
              <StyledBtn size={"medium"} onClick={giveDuckdom}>
                덕담 나눠주기
              </StyledBtn>
              {/* 마이 페이지 이동 버튼 */}
              <StyledBtn size={"home"} onClick={goHome}>
                <FontAwesomeIcon icon={faHouse} />
              </StyledBtn>
            </>
          )}

          {/* 랜덤방문 */}
          <StyledBtn onClick={random} size={"small"}>
            랜덤 이동
          </StyledBtn>

          <User></User>
        </MainWarp>
      </Main>
    </>
  );
}

export default LoginedBody;
