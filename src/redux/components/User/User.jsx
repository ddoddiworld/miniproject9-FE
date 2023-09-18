// user.jsx
import React from "react";
import styles from "./styles";
import devJeans from "../images/devJeans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function User() {
  const {
    Side,
    ToggleBtn,
    SideOverlay,
    NickName,
    UserName,
    UserImg,
    LogoutBtn,
  } = styles;

  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  const toggleStyle = {
    right: isOpen ? "340px" : "0px",
  };

  const sideStyle = {
    display: isOpen ? "block" : "none",
  };

  return (
    <div>
      {isOpen && <SideOverlay onClick={toggleSide}></SideOverlay>}
      <ToggleBtn onClick={toggleSide} style={toggleStyle}></ToggleBtn>
      <Side style={sideStyle}>
        <UserImg src={devJeans}></UserImg>
        <NickName>
          <UserName>덕담진스</UserName>
          <FontAwesomeIcon
            icon={faPencil}
            style={{ fontSize: "18px", color: "#B9B9B9", marginLeft: "5px" }}
          />
        </NickName>

        <LogoutBtn>로그아웃</LogoutBtn>
      </Side>
    </div>
  );
}

export default User;
