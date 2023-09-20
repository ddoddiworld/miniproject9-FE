// user.jsx
import React from "react";
import styles from "./styles";
import devJeans from "../images/devJeans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { removeCookie } from "../../../token/token";
import { useNavigate } from "react-router-dom";

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
  const [nickName, setNickName] = useState("덕담진스");
  const [isEditing, setIsEditing] = useState(false);
  const [newNickName, setNewNickName] = useState("");

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const toggleStyle = {
    right: isOpen ? "340px" : "0px",
  };

  const sideStyle = {
    display: isOpen ? "block" : "none",
  };

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
    removeCookie();
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
