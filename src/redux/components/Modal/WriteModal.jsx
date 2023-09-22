import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../../token/token";
import { userId } from "./LoginModal";

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
  const { userId } = useParams(); // 현재 사용자의 id
  const { receiverId } = useParams(); // 현재 페이지의 id -> 이걸 어떻게 가져올지?
  const [relationship, setRelationship] = useState("");
  const [content, setContent] = useState("");

  const sendDuckdom = async () => {
    if (userId === receiverId) {
      alert("스스로에게 덕담을 작성할 수 없습니다!");
      return;
    }

    if (!content) {
      alert("덕담을 입력해 주세요 🐰");
      return;
    }

    try {
      // 토큰 가져오기
      const accessToken = getCookie("accessToken");
      console.log(`글쓰기를 위한 토큰 확인: ${accessToken}`);

      // 요청 보내기
      const response = await axios.post(
        "http://54.180.87.103:4000/api/posts/receiverId",
        {
          userId,
          receiverId,
          relationship,
          content,
        },
        // {
        //   headers: {
        //     Accesstoken: `${accessToken}`,
        //   },
        // }
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
      console.log("서버 응답:", response.data);
      console.log(response.status);

      if (response.status === 200) {
        alert("글 보내기 성공!");
        onWriteComplete({ userId, receiverId, relationship, content });
      }
    } catch (error) {
      alert(`[글 보내기 실패]\n${error.message}`);
      console.error("글 보내기 실패! :", error.message);
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
