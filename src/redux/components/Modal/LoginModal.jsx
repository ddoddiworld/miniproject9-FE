import React from "react";
import styles from "./styles";
import { usestate } from "react";

function LoginModal({ isOpen, closeModal }) {
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
  } = styles;

  return (
    <>
      <Modal>
        <ModalTitle>로그인</ModalTitle>
        <ModalContents>
          <InputFild>
            <ModalLabel> 이메일 </ModalLabel>
            <ModalP center={false}></ModalP>
            <Input />
          </InputFild>
          <InputFild>
            <ModalLabel> 비밀번호 </ModalLabel>
            <ModalP center={false}></ModalP>
            <Input />
          </InputFild>
          <ModalBtn bgcolor="#ffa500">로그인</ModalBtn>
          <ModalP>
            회원이 아니신가요?<ModalLink>회원가입</ModalLink>
          </ModalP>
        </ModalContents>
      </Modal>
    </>
  );
}

export default LoginModal;
