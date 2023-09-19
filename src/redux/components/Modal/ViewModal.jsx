import React from 'react';
import styles from './styles';
import { useState } from 'react';

function ViewModal({ close }) {
    const { Modal, ModalTitle, ModalBox, TextArea, ModalBtn, CloseBtn } =
        styles;
    const [closeModal] = useState(true);

    return (
        <>
            {closeModal && (
                <Modal>
                    <ModalTitle margin="0 110px">
                        덕담이 도착했어요!<CloseBtn onClick={close}>x</CloseBtn>
                    </ModalTitle>
                    <ModalBox column={false}>
                        <span>친구</span> 이름
                    </ModalBox>
                    <ModalBox>
                        <TextArea placeholder="내용을 입력해 주세요."></TextArea>
                        <ModalBtn> 달에게 보내기 </ModalBtn>
                    </ModalBox>
                </Modal>
            )}
        </>
    );
}

export default ViewModal;
