import styled from "styled-components";

const SideOverlay = styled.div`
  content: "";
  display: inline-block;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 1200px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Side = styled.section`
  width: 350px;
  height: 100%;
  background-color: #fafafa;
  position: absolute;
  top: 0;
  right: 0;
`;

const ToggleBtn = styled.button`
  position: absolute;
  right: 0px;
  top: 20%;
  width: 40px;
  height: 150px;
  background-color: #fafafa;
  border-radius: 50px 0 0 50px;
  cursor: pointer;
  border: none;
`;

const UserImg = styled.img`
  margin-top: 80px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
`;

const NickName = styled.div`
  padding: 40px 0 10px;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserName = styled.span`
  font-family: "yg-jalnan";
  font-size: 40px;
  border-bottom: 3px solid #b9b9b9;
`;

const LogoutBtn = styled.button`
  color: #798389;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 120px;
`;

export default {
  Side,
  ToggleBtn,
  SideOverlay,
  NickName,
  UserName,
  UserImg,
  LogoutBtn,
};
