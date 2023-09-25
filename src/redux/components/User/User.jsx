// user.jsx
import React, { useEffect } from "react";
import styles from "./styles";
import devJeans from "../images/devJeans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { removeCookie } from "../../../token/token";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../../../token/token";
import axios from "axios";

function User() {
  const {
    Side,
    ToggleBtn,
    SideOverlay,
    NickName,
    NewNickName,
    UserName,
    UserImg,
    NewNickBtn,
    LogoutBtn,
  } = styles;

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [nickName, setNickName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newNickName, setNewNickName] = useState("");

  const refreshToken = getCookie("refreshToken");
  const accessToken = getCookie("accessToken");

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const toggleStyle = {
    right: isOpen ? "340px" : "0px",
  };

  const sideStyle = {
    display: isOpen ? "block" : "none",
  };

  // 닉네임 불러오기 (사이드바)
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

  const changeNickName = (e) => {
    setNewNickName(e.target.value);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const saveNickName = () => {
    if (!newNickName) {
      alert("새 닉네임을 입력해 주세요!\n(최대 5글자까지 입력 가능)");
      return;
    } else {
      setNickName(newNickName);
      setIsEditing(false);
    }
  };

  const logoutHandler = () => {
    removeCookie("accessToken");
    removeCookie("refreshToken");
    alert("[로그아웃]\n안녕히 가세요!");
    navigate("/");
  };

  return (
    <div>
      {isOpen && <SideOverlay onClick={toggleSide}></SideOverlay>}
      <ToggleBtn onClick={toggleSide} style={toggleStyle}></ToggleBtn>
      <Side style={sideStyle}>
        <UserImg src={devJeans}></UserImg>
        <NickName>
          {isEditing ? (
            // 입력 필드 표시
            <>
              <NewNickName
                type="text"
                value={newNickName}
                onChange={changeNickName}
                maxLength={5}
                placeholder="새로운 닉네임"
              />

              <NewNickBtn
                color={"cancel"}
                onClick={() => {
                  setIsEditing(false);
                }}
              >
                취소
              </NewNickBtn>
              <NewNickBtn color={"save"} onClick={saveNickName}>
                저장
              </NewNickBtn>
            </>
          ) : (
            // 편집 모드 아닐 때는 닉네임 표시
            <>
              <UserName onClick={startEditing}>{nickName}</UserName>
              <FontAwesomeIcon
                icon={faPencil}
                style={{
                  fontSize: "18px",
                  color: "#B9B9B9",
                  marginLeft: "5px",
                }}
                onClick={startEditing} // 편집 모드로 전환
              />
            </>
          )}
        </NickName>

        <LogoutBtn onClick={logoutHandler}>로그아웃</LogoutBtn>
      </Side>
    </div>
  );
}

export default User;
