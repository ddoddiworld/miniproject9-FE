import axios from "axios";
import { setCookie, getCookie } from "./token"; // token.js에서 setCookie와 getCookie 함수 가져오기

const refreshAccessToken = async () => {
  try {
    // 리프레시 토큰 가져오기
    const refreshToken = getCookie("refreshToken"); // 'refreshToken' 쿠키에서 리프레시 토큰 가져오기
    console.log("새로운 엑세스 토큰을 받아옵니다.", refreshToken);

    const setAccessTokenCookie = (accessToken) => {
      // 쿠키에 엑세스 토큰 저장
      setCookie("accessToken", accessToken);
    };

    if (!refreshToken) {
      console.error("리프레시 토큰이 없습니다.");
      console.log(refreshToken);
      return;
    }

    // 리프레시 토큰을 사용하여 새로운 엑세스 토큰 요청
    const response = await axios.post(
      "https://www.totobon6125.store/api/retoken",
      {
        refreshToken,
      }
    );

    const newAccessToken = response.headers["accesstoken"];

    // 새로운 엑세스 토큰 저장
    setAccessTokenCookie(newAccessToken);

    // 리프레시 토큰 재설정 (선택 사항)
    setCookie("refreshToken", refreshToken); // 리프레시 토큰을 다시 설정

    console.log("로그인이 연장되었습니다.");
  } catch (error) {
    console.error("엑세스 토큰 갱신 실패:", error.message);
  }
};

export default refreshAccessToken;
