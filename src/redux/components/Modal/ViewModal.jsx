import React from 'react';
import styles from './styles';

function ViewModal() {
    const { Modal, ModalTitle, ModalBox, TextArea, ModalBtn } = styles;

    return (
        <Modal>
            <ModalTitle margin="0 110px">덕담이 도착했어요!</ModalTitle>
            <ModalBox column={false}>
                <span>친구</span> 이름
            </ModalBox>
            <ModalBox>
                <TextArea placeholder="내용을 입력해 주세요."></TextArea>
                <ModalBtn> 달에게 보내기 </ModalBtn>
            </ModalBox>
        </Modal>
    );
}

export default ViewModal;
