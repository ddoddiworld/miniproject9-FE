import React from "react";
import styles from "./styles";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../../token/token";
function WriteModal({ close, onWriteComplete }) {
  const {
    Modal,
    ModalTitle,
    ModalBox,
    Who,
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

  const sendDuckdom = async () => {
    if (!content) {
      alert("덕담을 입력해 주세요 🐰");
      return;
    } else {
      try {
        // 토큰 가져오기
        const token = getCookie();
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // 요청 보내기
        const response = await axios.post(
          "http://54.180.87.103:4000/api/posts",
          {
            relationship,
            content,
          },
          config
        );
        console.log(response.status);

        if (response.status === 200) {
          alert("글 보내기 성공!");
          onWriteComplete({ relationship, content });
        }
      } catch (error) {
        alert(`[글 보내기 실패]\n${error.message}`);
        console.error("글 보내기 실패! :", error.message);
      }
    }

    setRelationship("");
    setContent("");
    close();
  };

  return (
    <>
      {closeModal && (
        <Modal>
          <ModalTitle>
            덕담을 적어주세요!<CloseBtn onClick={close}>x</CloseBtn>
          </ModalTitle>
          <ModalBox justify={"start"}>
            <Who>나는 </Who>
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
