import React from "react";
import styles from "./styles";
import { useState } from "react";
function WriteModal({ close }) {
  const {
    Modal,
    ModalTitle,
    ModalBox,
    TextArea,
    ModalBtn,
    FamilySelect,
    UserName,
    CloseBtn,
  } = styles;
  const [closeModal] = useState(true);

  // 덕담 저장하기
  const [relationship, setRelationship] = useState("");
  const [content, setContent] = useState("");
  const sendDuckdom = () => {
    alert(`[TEST]\n우리의 관계: ${relationship}\n덕담 내용: ${content}`);

    setRelationship("");
    setContent("");
    close();
  };

  return (
    <>
      {/* {showOverlay && <SideOverlay onClick={close} />} */}
      {closeModal && (
        <Modal>
          <ModalTitle>
            덕담을 적어주세요!<CloseBtn onClick={close}>x</CloseBtn>
          </ModalTitle>
          <ModalBox>
            <FamilySelect
              value={relationship}
              onChange={(e) => {
                setRelationship(e.target.value);
              }}
            >
              <option>할아버지 / 할머니</option>
              <option>아빠 / 엄마</option>
              <option>친구</option>
              <option>댕댕이 / 냥냥이</option>
            </FamilySelect>
            <UserName>덕담진스</UserName>
          </ModalBox>
          <ModalBox direction={"column"}>
            <TextArea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="덕담을 입력해 주세요."
            ></TextArea>
            <ModalBtn onClick={sendDuckdom}>달에게 보내기 </ModalBtn>
          </ModalBox>
        </Modal>
      )}
    </>
  );
}

export default WriteModal;
