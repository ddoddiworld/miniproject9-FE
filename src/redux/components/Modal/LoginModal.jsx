import React from "react";
import styles from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../../token/token";

function LoginModal({ close, signOpen }) {
  const {
    Modal,
    ModalTitle,
    ModalContents,
    InputFild,
    Input,
    ModalLabel,
    ModalBtn,
    ModalP,
    ModalLink,
    CloseBtn,
  } = styles;

  // hook
  const navigate = useNavigate();

  const [closeModal] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 토큰 get
  useEffect(() => {
    const token = getCookie();
    if (token) {
      navigate("/");
    }
  }, []);

  // 로그인 버튼 fn
  const loginHandler = async () => {
    try {
      if (!email || !password) {
        alert("이메일과 비밀번호를 입력해 주세요!");
        return;
      } else {
        const response = await axios.post(
          "http://54.180.87.103:4000/api/signin",
          {
            email,
            password,
          }
        );
        console.log(response.status);

        // 로그인 성공
        if (response.status === 200) {
          const token = response.headers.authorization;
          setCookie("token", token, 1 / 24); // 정수는 0일  1/24 는 1시간
          alert("[로그인 성공]\n안녕하세요! 좋은 하루 보내세요😄");
          close();
        }
      }
    } catch (error) {
      alert(`[로그인 실패]\n${error.message}`);
      console.error("로그인 실패! :", error.message);
    }
  };

  return (
    <>
      {closeModal && (
        <Modal>
          <ModalTitle>
            로그인<CloseBtn onClick={close}>x</CloseBtn>
          </ModalTitle>
          <ModalContents>
            <InputFild>
              <ModalLabel> 이메일 </ModalLabel>
              <ModalP center={false}></ModalP>
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </InputFild>
            <InputFild>
              <ModalLabel> 비밀번호 </ModalLabel>
              <ModalP center={false}></ModalP>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputFild>
            <ModalBtn bgcolor="#ffa500" onClick={loginHandler}>
              로그인
            </ModalBtn>
            <ModalP>
              {/* 회원가입버튼을 누르면 로그인 모달창이 닫히고, 회원가입 모달창이 나오도록? */}
              회원이 아니신가요?
              <ModalLink
                onClick={() => {
                  close();
                  signOpen();
                }}
              >
                회원가입
              </ModalLink>
            </ModalP>
          </ModalContents>
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
