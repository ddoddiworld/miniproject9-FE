import React from "react";
import styles from "./styles";
import { useState, useEffect } from "react";
import axios from "axios";
// import { getToken } from "../../../token/token";

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
  const [confirm, setConfirm] = useState("");

  // 회원 가입 (추가)
  const joinHandler = async () => {
    if (!email || !password || !confirm) {
      alert("모든 빈칸을 반드시 입력 해 주세요!");
      return;
    }

    try {
      const response = await axios.post(
        "http://54.180.87.103:4000/api/signup",
        {
          email,
          password,
          confirm,
        }
      );

      if (response.status === 201) {
        alert(
          `ID : '${email}'\nPassword: '${password}'\n으로 회원가입 되었습니다! 🎉\n로그인 부탁드립니다!`
        );
        close();
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
              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TestBtn center={false}> 중복검사 </TestBtn>
            </InputFild>
            <InputFild>
              <ModalLabel> 비밀번호 </ModalLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </InputFild>
            <InputFild>
              <ModalLabel> 비밀번호 확인</ModalLabel>
              <Input
                type="password"
                value={confirm}
                onChange={(e) => {
                  setConfirm(e.target.value);
                }}
              />
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
