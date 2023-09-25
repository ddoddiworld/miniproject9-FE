import { useParams } from "react-router-dom";
import styles from "./styles";
import { useState } from "react";
import axios from "axios";
import { getCookie } from "../../../token/token";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

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
  const { receiverId } = useParams();
  const [relationship, setRelationship] = useState("할아버지 / 할머니");
  const [content, setContent] = useState("");
  const [data, setData] = useState(null); // 응답 데이터 저장
  const [nickName, setNickName] = useState("");
  const refreshToken = getCookie("refreshToken");
  const accessToken = getCookie("accessToken");

  // 닉네임 불러오기
  useEffect(() => {
    const myName = async () => {
      const response = await axios.get("http://54.180.87.103:4000/api/mypage", {
        headers: {
          Authorization: `${accessToken}`,
        },
      });
      // console.log("당신의 닉네임은? :", response.data.data.nickname);
      setNickName(response.data.data.nickname);
    };
    myName();
  }, []);

  const sendDuckdom = async () => {
    // 토큰 가져오기 (access, refresh)
    const refreshToken = getCookie("refreshToken"); // 0923 accessToken으로는 인증 불가로 refreshToken으로 인증
    const accessToken = getCookie("accessToken");
    const userId = jwt_decode(accessToken).userId; // 로그인한 사용자 ID

    if (!content) {
      alert("덕담을 입력해 주세요 🐰");
      return;
    }

    try {
      // 요청 보내기
      const response = await axios.post(
        `http://54.180.87.103:4000/api/posts/${receiverId}`,
        {
          userId,
          receiverId,
          relationship,
          content,
        },
        {
          headers: {
            Authorization: `${accessToken}`,
          },
        }
      );
      console.log("서버 응답:", response.data);
      console.log(response.status);

      if (response.status === 200) {
        alert("덕담 보내기 완료! 🐰");
        // onWriteComplete({ userId, receiverId, relationship, content });
      }

      // 412 : 스스로에게 덕담 작성하면 발생하는 오류인데 아래 코드가 안먹힘..! 추후 확인 예정
      if (response.status === 412) {
        alert("스스로에게 덕담을 작성할 수 없습니다!");
        return;
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
            <UserName>{nickName}</UserName>
          </ModalBox>
          <ModalBox direction={"column"}>
            <TextArea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="덕담을 입력해 주세요.&#13;&#10;지나친 욕설은 운영진에 의해 삭제될 수 있습니다!"
            ></TextArea>
            <ModalBtn onClick={sendDuckdom}>달에게 보내기 </ModalBtn>
          </ModalBox>
        </Modal>
      )}
    </>
  );
}

export default WriteModal;
