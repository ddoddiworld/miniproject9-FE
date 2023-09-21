import React from "react";
import styles from "./styles";
import { useState } from "react";

function ViewModal({ close, relationship, content }) {
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
  const [closeModal] = useState(true);

  return (
    <>
      {closeModal && (
        <Modal>
          <ModalTitle>
            덕담이 도착했어요!<CloseBtn onClick={close}>x</CloseBtn>
          </ModalTitle>
          <ModalBox justify={"start"}>
            <Who>From.</Who>
            <UserRel value={relationship}>댕댕이 / 냥냥이</UserRel>
            <UserName>추석진스</UserName>
          </ModalBox>
          <ModalBox direction={"column"}>
            <TextArea value={content} readOnly>
              덕담 내용입니다.
            </TextArea>
            <ModalBtn onClick={close}>닫기</ModalBtn>
          </ModalBox>
        </Modal>
      )}
    </>
  );
}

export default ViewModal;
