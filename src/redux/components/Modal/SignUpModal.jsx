import React from 'react';
import styles from './styles';
import { useState } from 'react';

function SignUpModal({ close }) {
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

    return (
        <>
            {closeModal && (
                <Modal>
                    <ModalTitle>
                        회원가입<CloseBtn onClick={close}>x</CloseBtn>
                    </ModalTitle>
                    <ModalContents>
                        <InputFild>
                            <ModalLabel margin="0 15px 0 0">
                                {' '}
                                이메일{' '}
                            </ModalLabel>
                            <Input />
                            <TestBtn center={false}> 중복검사 </TestBtn>
                        </InputFild>
                        <InputFild>
                            <ModalLabel> 비밀번호 </ModalLabel>
                            <Input />
                        </InputFild>
                        <InputFild>
                            <ModalLabel> 비밀번호 확인</ModalLabel>
                            <Input />
                        </InputFild>
                        <ModalBtn>회원가입 완료</ModalBtn>
                        <ModalP>
                            회원이신가요?<ModalLink>로그인</ModalLink>
                        </ModalP>
                    </ModalContents>
                </Modal>
            )}
        </>
    );
}

export default SignUpModal;
