import React from 'react';
import styles from './styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { getToken } from "../../../token/token";

function SignUpModal({ close, loginOpen }) {
    const {
        Modal,
        ModalTitle,
        ModalContents,
        InputFild,
        Input,
        ModalLabel,
        ModalBtn,
        TestBtn,
        ModalP,
        ModalLink,
        CloseBtn,
    } = styles;

    const [closeModal] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [nickName, setNickName] = useState('');

    const [isIdAvailable, setIsIdAvailable] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // 이메일, 비밀번호 체크
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
    const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9]).{4,}$/i);

    // 엔터키로 회원가입 버튼 누르기
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            // 엔터 키가 눌렸을 때 로그인 처리 함수 호출
            joinHandler();
        }
    };

    // 아이디 중복 검사 함수
    const checkId = async () => {
        if (!email) {
            setErrorMessage('이메일을 입력해 주세요.');
            return;
        }

        try {
            const response = await axios.post(
                'http://54.180.87.103:4000/api/signup',
                {
                    email,
                }
            );

            if (response.status === 200) {
                setIsIdAvailable(true);
                alert('사용 가능한 아이디입니다.');
            } else if (response.status === 412) {
                setIsIdAvailable(false);
                alert('중복 된 이메일입니다.');
            }
        } catch (error) {
            console.error('아이디 중복 검사 실패:', error);
            alert('아이디 중복 검사에 실패했습니다.');
        }
    };

    // 회원 가입 (추가)
    const joinHandler = async () => {
        if (!email || !password || !confirm) {
            alert('모든 빈칸을 반드시 입력 해 주세요!');
            return;
        }
        if (!email || !password || !confirm) {
            alert('모든 빈칸을 반드시 입력 해 주세요!');
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

        if (password !== confirm) {
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다!');
            return;
        }
        try {
            const response = await axios.post(
                'http://54.180.87.103:4000/api/signup',
                {
                    email,
                    password,
                    confirm,
                }
            );

            if (response.status === 201) {
                alert(
                    `ID : '${email}'\nPassword: '${password}'\n으로 회원가입 되었습니다! 🎉\n로그인 부탁드립니다!`
                );
                close();
            }
        } catch (error) {
            console.error('회원 가입 실패! :', error);
        }
    };

    return (
        <>
            {closeModal && (
                <Modal>
                    <ModalTitle>
                        회원가입<CloseBtn onClick={close}>x</CloseBtn>
                    </ModalTitle>
                    <ModalContents>
                        <InputFild>
                            <ModalLabel> 닉네임 </ModalLabel>
                            <Input
                                type="text"
                                maxLength={5}
                                value={nickName}
                                onChange={(e) => {
                                    setNickName(e.target.value);
                                }}
                            />
                        </InputFild>
                        <InputFild>
                            <ModalLabel margin="0 7px 0 9px">
                                {' '}
                                이메일{' '}
                            </ModalLabel>
                            <Input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                margin={'20px 0px'}
                            />
                            <TestBtn center={false} onClick={checkId}>
                                {' '}
                                중복검사{' '}
                            </TestBtn>
                        </InputFild>
                        <InputFild>
                            <ModalLabel> 비밀번호 </ModalLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </InputFild>
                        <InputFild>
                            <ModalLabel> 비밀번호 확인</ModalLabel>
                            <Input
                                type="password"
                                value={confirm}
                                onChange={(e) => {
                                    setConfirm(e.target.value);
                                }}
                                onKeyPress={handleKeyPress}
                            />
                        </InputFild>
                        <ModalBtn onClick={joinHandler}>회원가입 완료</ModalBtn>
                        <ModalP>
                            회원이신가요?
                            <ModalLink
                                onClick={() => {
                                    close();
                                    loginOpen();
                                }}
                            >
                                로그인
                            </ModalLink>
                        </ModalP>
                    </ModalContents>
                </Modal>
            )}
        </>
    );
}
export default SignUpModal;
