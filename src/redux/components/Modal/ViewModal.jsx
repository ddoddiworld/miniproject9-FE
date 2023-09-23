import React from "react";
import styles from "./styles";
import { useState } from "react";
import star from "../images/star2.png";
import { Star } from "../LoginedBody/styles";

function ViewModal({ duckdomData, starStyles }) {
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

  const [open, setOpen] = useState(false);

  return (
    <>
      <Star src={star} onClick={() => setOpen(true)} style={starStyles} />
      {open && (
        <Modal key={duckdomData.postId}>
          <ModalTitle>
            덕담이 도착했어요!
            <CloseBtn onClick={() => setOpen(false)}>x</CloseBtn>
          </ModalTitle>
          <ModalBox justify={"start"}>
            <Who>From.</Who>
            <UserRel value={duckdomData.relationship}>
              관계 데이터 없음!
            </UserRel>
            <UserName>{duckdomData.postId}</UserName>
          </ModalBox>
          <ModalBox direction={"column"}>
            <TextArea readOnly value={duckdomData.content}></TextArea>
            <ModalBtn onClick={() => setOpen(false)}>닫기</ModalBtn>
          </ModalBox>
        </Modal>
      )}
    </>
  );
}

export default ViewModal;
