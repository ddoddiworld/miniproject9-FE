import React from "react";
import styles from "./styles";
import { useState } from "react";

function ViewModal({ close, duckdomData }) {
  const {
    Modal,
    ModalTitle,
    ModalBox,
    TextArea,
    ModalBtn,
    CloseBtn,
    Who,
    UserName,
    UserRel,
  } = styles;
  // const [closeModal] = useState(true);

  const closeModal = () => {
    // 모달을 닫는 로직
    close();
  };

  console.log("duckdomData가 여기 잘 들어왔나?", duckdomData);

  return (
    <>
      {duckdomData.map((item, index) => (
        <Modal key={item.postId}>
          <ModalTitle>
            덕담이 도착했어요!<CloseBtn onClick={closeModal}>x</CloseBtn>
          </ModalTitle>
          <ModalBox justify={"start"}>
            <Who>From.</Who>
            <UserRel value={item.relationship}>관계 데이터 없음!</UserRel>
            <UserName>{item.postId}</UserName>
          </ModalBox>
          <ModalBox direction={"column"}>
            <TextArea readOnly value={item.content}></TextArea>
            <ModalBtn onClick={closeModal}>닫기</ModalBtn>
          </ModalBox>
        </Modal>
      ))}
    </>
  );
}

export default ViewModal;
