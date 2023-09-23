import styled, { css } from "styled-components";

export const SideOverlay = styled.div`
  content: "";
  display: inline-block;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 1200px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

export const Main = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  color: #f0f0f0;
`;

export const MainWarp = styled.div`
  background: linear-gradient(to bottom, #213555, #4f709c);
  position: relative;
  min-height: 100dvh;
  text-align: center;
`;

export const Moon = styled.img`
  width: 400px;
  margin: 70px 0;
  animation: opacity 3s steps(40) infinite;
  @keyframes opacity {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  font-family: "yg-jalnan";
  padding: 60px 0 10px;
  letter-spacing: 1px;
  overflow: hidden;
  white-space: nowrap;
  animation: slideIn 1s steps(40) alternate;
  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-family: "GowunBatang-Regular";
`;

export const StyledBtn = styled.button`
  font-family: "yg-jalnan";
  height: 60px;
  border-radius: 20px;
  font-size: 22px;
  color: #f0f0f0;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.size === "medium" &&
    css`
      background-color: #ff6f61;
      width: 200px;
      &:hover {
        box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 4px #ff6f61;
      }
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      width: 90px;
      margin-left: 10px;
      background-color: #00b894;
      &:hover {
        box-shadow: 0 0 10px 0 #fff inset, 0 0 10px 4px #00b894;
      }
    `}
`;

export const Star = styled.img`
  position: absolute;
  /* 별들 위치 + 크기 props 사용 */
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};
  left: ${(props) => props.left || "auto"};
  width: ${(props) => props.width || "120px"};
  animation: topbottom 10s linear infinite;
  transition: drop-shadow 0.3s;
  @keyframes topbottom {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(5px 5px 20px #ffc800);
  }
`;
