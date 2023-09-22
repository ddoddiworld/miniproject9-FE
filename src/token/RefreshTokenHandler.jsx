// RefreshTokenHandler.jsx

import axios from 'axios';
import { setCookie, getCookie } from './token'; // token.js에서 setCookie와 getCookie 함수 가져오기

const refreshAccessToken = async () => {
    try {
        // 리프레시 토큰 가져오기
        const refreshToken = getCookie('refreshToken'); // 'refreshToken' 쿠키에서 리프레시 토큰 가져오기
        console.log('새로운 엑세스 토큰을 받아옵니다.');
        // 리프레시 토큰을 사용하여 새로운 엑세스 토큰 요청
        const response = await axios.post(
            'http://54.180.87.103:4000/api/signin',
            {
                refreshToken,
            }
        );

        const newAccessToken = response.data.token;

        // 새로운 엑세스 토큰 저장
        setCookie('refreshToken', newAccessToken);

        // 리프레시 토큰 재설정 (선택 사항)
        setCookie('refreshToken', refreshToken); // 리프레시 토큰을 다시 설정
    } catch (error) {
        console.error('엑세스 토큰 갱신 실패:', error.message);
    }
};

export default refreshAccessToken;
