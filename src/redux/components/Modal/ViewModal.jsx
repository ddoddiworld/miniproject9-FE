import React from "react";
import styles from "./styles";
import { useState } from "react";
import star from "../images/star2.png";
import { Star } from "../LoginedBody/styles";

/**
 * //* 받은 덕담 보기
 * //* 개인의 덕담만 확인 가능하며 타인의 덕담의 경우 볼 수 없음
 */
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
  // console.log(duckdomData);

  return (
    <>
      <Star
        src={star}
        onClick={() =>
          duckdomData
            ? setOpen(true)
            : console.log("남의 덕담을 볼 수 없어요! ⭐️")
        }
        style={starStyles}
      />
      {open && (
        <Modal key={duckdomData.postId}>
          <ModalTitle>
            덕담이 도착했어요!
            <CloseBtn onClick={() => setOpen(false)}>x</CloseBtn>
          </ModalTitle>
          <ModalBox justify={"start"}>
            <Who>From.</Who>
            <UserRel>{duckdomData.relationship}</UserRel>
            <UserName>{duckdomData.nickname}</UserName>
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
