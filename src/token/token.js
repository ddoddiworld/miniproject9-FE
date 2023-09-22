import { Cookies } from "react-cookie";
const cookies = new Cookies();

//? Access Token
// 토큰을 쿠키에 저장하는 함수
export const setCookie = (name, value) => {
  // 이름과 값을 인자로 받도록 수정
  cookies.set(name, value, { path: "/", maxAge: 60 * 60 * 24 * 7 }); // 7일 동안 유효한 쿠키로 저장 : maxAge: 60 * 60 * 24 * 7
};

// 쿠키에서 토큰을 추출하는 함수
export const getCookie = (name) => {
  // 이름을 인자로 받도록 수정
  return cookies.get(name); // 이름에 해당하는 쿠키를 가져오도록 수정
};

// 쿠키에서 토큰을 제거하는 함수
export const removeCookie = (name) => {
  // 이름을 인자로 받도록 수정
  cookies.remove(name); // 이름에 해당하는 쿠키를 제거하도록 수정
};

// 사용자가 로그인되어 있는지 확인하는 함수
export const isUserLoggedIn = () => {
  const token = getCookie();
  return !!token; // 토큰이 존재하면 true, 그렇지 않으면 false를 반환
};

//? Refresh Token
// 리프레시 토큰 저장 함수
export const setRefreshToken = (name, value) => {
  // name과 value를 받도록 수정
  cookies.set(name, value, { path: "/", maxAge: 60 * 60 * 24 * 7 });
};

// 리프레시 토큰 가져오기 함수
export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

// 리프레시 토큰 삭제 함수
export const removeRefreshToken = () => {
  cookies.remove("refreshToken", { path: "/" });
};

// 이 전 코드
// export const setCookie = (token) => {
//   // 첫 번째 매개변수에 쿠키의 이름을 지정합니다. 여기서는 'token'을 사용하겠습니다.
//   // 두 번째 매개변수에는 토큰 값이 전달됩니다.
//   cookies.set('token', token, { path: '/', maxAge: 60 * 60 * 24 * 7 }); // 7일 동안 유효한 쿠키로 저장
// };

// // 쿠키에서 토큰을 추출하는 함수
// export const getCookie = () => {
//   return cookies.get('token');
// };

// // 쿠키에서 토큰을 제거하는 함수
// export const removeCookie = () => {
//   cookies.remove('token');
// };
