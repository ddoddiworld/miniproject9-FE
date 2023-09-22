import React from 'react';
import styles from './styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    getCookie,
    setCookie,
    removeCookie,
    setRefreshToken,
    getRefreshToken,
} from '../../../token/token';

function LoginModal({ close, signOpen }) {
    const {
        Modal,
        ModalTitle,
        ModalContents,
        InputFild,
        Input,
        ModalLabel,
        ModalBtn,
        ModalP,
        ModalLink,
        CloseBtn,
    } = styles;

    // hook
    const navigate = useNavigate();

    const [closeModal] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 이메일, 비밀번호 체크
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/i);

    // 엔터키로 로그인 버튼 누르기
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // 엔터 키가 눌렸을 때 로그인 처리 함수 호출
            loginHandler();
        }
    };

    // 토큰 get
    useEffect(() => {
        const token = getCookie();
        if (token) {
            navigate(`/${email}`);
        }
    }, []);

    // 로그인 버튼 fn
    const loginHandler = async () => {
        if (!email || !password) {
            alert('이메일과 비밀번호를 모두 입력해 주세요!');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('이메일 형식으로 입력해 주세요!');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert(
                '비밀번호는 최소 하나의 알파벳과 하나의 숫자를 포함하고 4자 이상이어야 합니다.'
            );
            return;
        }
        try {
            const existingToken = getCookie();
            if (existingToken) {
                removeCookie('token'); // 기존 토큰 삭제
            }

            if (!email || !password) {
                alert('이메일과 비밀번호를 입력해 주세요!');
                return;
            } else {
                const response = await axios.post(
                    'http://54.180.87.103:4000/api/signin',
                    {
                        email,
                        password,
                    }
                );
                console.log(response.status);
                console.log('서버 응답:', response.data);
                console.log('서버 응답 헤더:', response.headers);
                console.log('유저 아이디 확인:', response.data.data);

                // 로그인 성공
                if (response.status === 200) {
                    // access token
                    const accesstokenHeader = response.headers['accesstoken'];
                    const accesstoken = accesstokenHeader
                        ? accesstokenHeader
                        : null;
                    if (accesstoken) {
                        setCookie('accessToken', accesstoken);
                    }
                    alert('[로그인 성공]\n안녕하세요! 좋은 하루 보내세요😄');
                    navigate(`/${response.data.data}`);
                    console.log('받은 토큰:', accesstoken);

                    // refresh token
                    const refreshTokenHeader = response.headers['refreshtoken'];
                    const refreshToken = refreshTokenHeader
                        ? refreshTokenHeader
                        : null;
                    if (refreshToken) {
                        setRefreshToken('refreshToken', refreshToken); // 수정된 코드로 호출
                        console.log('받은 토큰:', refreshToken);
                    }
                }
            }
        } catch (error) {
            alert(`[로그인 실패]\n${error.message}`);
            console.error('로그인 실패! :', error.message);
            console.error('서버 응답 오류:', error);
        }
    };
    useEffect(() => {
        // 토큰 확인 (테스트용)
        const accessToken = getCookie();
        const refreshToken = getRefreshToken();
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);
    }, []);

    return (
        <>
            {closeModal && (
                <Modal>
                    <ModalTitle>
                        로그인<CloseBtn onClick={close}>x</CloseBtn>
                    </ModalTitle>
                    <ModalContents>
                        <InputFild>
                            <ModalLabel> 이메일 </ModalLabel>
                            <ModalP center={false}></ModalP>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </InputFild>
                        <InputFild>
                            <ModalLabel> 비밀번호 </ModalLabel>
                            <ModalP center={false}></ModalP>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                        </InputFild>
                        <ModalBtn bgcolor="#ffa500" onClick={loginHandler}>
                            로그인
                        </ModalBtn>
                        <ModalP>
                            {/* 회원가입버튼을 누르면 로그인 모달창이 닫히고, 회원가입 모달창이 나오도록? */}
                            회원이 아니신가요?
                            <ModalLink
                                onClick={() => {
                                    close();
                                    signOpen();
                                }}
                            >
                                회원가입
                            </ModalLink>
                        </ModalP>
                    </ModalContents>
                </Modal>
            )}
        </>
    );
}

export default LoginModal;
