import React from 'react';
import styles from './styles';
import { useState } from 'react';

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

    const [closeModal] = useState(true);

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
                            <Input />
                        </InputFild>
                        <InputFild>
                            <ModalLabel> 비밀번호 </ModalLabel>
                            <ModalP center={false}></ModalP>
                            <Input />
                        </InputFild>
                        <ModalBtn bgcolor="#ffa500">로그인</ModalBtn>
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
