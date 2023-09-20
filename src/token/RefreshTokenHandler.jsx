import axios from 'axios';
import { setCookie, setRefreshToken, getRefreshToken } from './token';

const refreshAccessToken = async () => {
    try {
        // 리프레시 토큰 가져오기
        const refreshToken = getRefreshToken();

        // 리프레시 토큰을 사용하여 새로운 엑세스 토큰 요청
        const response = await axios.post(
            'http://54.180.87.103:4000/api/refresh-token',
            {
                refreshToken,
            }
        );

        const newAccessToken = response.data.token;

        // 새로운 엑세스 토큰 저장
        setCookie('token', newAccessToken, 1 / 24);
    } catch (error) {
        console.error('엑세스 토큰 갱신 실패:', error.message);
    }
};

export default refreshAccessToken;
