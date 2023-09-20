// 쿠키 저장 -> 이걸로 저장 예정!
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (token) => {
  return cookies.set("token", token);
};

export const getCookie = () => {
  return cookies.get("token");
};

export const removeCookie = () => {
  cookies.remove("token");
  // localStorage.removeItem("token");
};

// 로컬스토리지 저장 -> 구 방법
// export const setToken = (token) => {
//   localStorage.setItem("token", token);
// };

// export const getToken = () => {
//   return localStorage.getItem("token");
// };

// export const removeToken = () => {
//   return localStorage.removeItem("token");
// };

// // 토큰 설정 및 만료 시간 설정
// export const setToken = (token, expirationTimeInSeconds) => {
//   const now = new Date();
//   const expirationTime = now.getTime() + expirationTimeInSeconds * 1800; // 30분 유지

//   const tokenData = {
//     token,
//     expirationTime,
//   };

//   localStorage.setItem("token", JSON.stringify(tokenData));
// };

// // 토큰 가져오기 및 유효성 검사
// export const getToken = () => {
//   const tokenDataString = localStorage.getItem("token");

//   if (!tokenDataString) {
//     return null; // 토큰이 없음
//   }

//   const tokenData = JSON.parse(tokenDataString);
//   const now = new Date().getTime();

//   if (now > tokenData.expirationTime) {
//     removeToken(); // 토큰 만료됨
//     return null;
//   }

//   return tokenData.token;
// };

// // 토큰 삭제
// export const removeToken = () => {
//   localStorage.removeItem("token");
// };
