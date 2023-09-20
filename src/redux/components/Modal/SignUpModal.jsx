import React from "react";
import styles from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../../token/token";

function SignUpModal({ close, loginOpen }) {
  const {
    Modal,
    ModalTitle,
    ModalContents,
    InputFild,
    Input,
    ModalLabel,
    ModalBtn,
    TestBtn,
    ModalP,
    ModalLink,
    CloseBtn,
  } = styles;

  const [closeModal] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimpw, setConfrimpw] = useState("");

  // 토큰 get
  useEffect(() => {
    const token = getToken();
    if (token) {
      alert(token);
    }
  }, []);

  // 회원 가입 (추가)
  const joinHandler = async () => {
    // id, pw 입력 확인
    // if (!email || !password || !confrimpw) {
    //   alert("모든 빈칸을 반드시 입력 해 주세요!");
    //   return;
    // }

    // axios
    try {
      const response = await axios.post("http://3.38.191.164/register", {
        email,
        password,
        confrimpw,
      });

      if (response.status === 201) {
        alert(
          `ID : '${email}'\nPassword: '${password}'\n으로 회원가입 되었습니다! 🎉`
        );
        console.log(response);
        // navigate("/");
      }
    } catch (error) {
      console.error("회원 가입 실패! :", error);
    }
  };

  return (
    <>
      {closeModal && (
        <Modal>
          <ModalTitle>
            회원가입<CloseBtn onClick={close}>x</CloseBtn>
          </ModalTitle>
          <ModalContents>
            <InputFild>
              <ModalLabel margin="0 15px 0 0"> 이메일 </ModalLabel>
              <Input />
              <TestBtn center={false}> 중복검사 </TestBtn>
            </InputFild>
            <InputFild>
              <ModalLabel> 비밀번호 </ModalLabel>
              <Input type="password" />
            </InputFild>
            <InputFild>
              <ModalLabel> 비밀번호 확인</ModalLabel>
              <Input type="password" />
            </InputFild>
            <ModalBtn onClick={joinHandler}>회원가입 완료</ModalBtn>
            <ModalP>
              회원이신가요?
              <ModalLink
                onClick={() => {
                  close();
                  loginOpen();
                }}
              >
                로그인
              </ModalLink>
            </ModalP>
          </ModalContents>
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
