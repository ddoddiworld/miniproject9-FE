import React from 'react';
import styles from './styles';

function WriteModal() {
    const { Modal, ModalTitle, ModalBox, TextArea, ModalBtn, FamilySelect } =
        styles;

    return (
        <Modal>
            <ModalTitle margin="0 110px">덕담을 적어주세요!</ModalTitle>
            <ModalBox column={false}>
                <FamilySelect>
                    <option>할아버지</option>
                    <option>할머니</option>
                    <option>아빠</option>
                    <option>엄마</option>
                    <option>친구</option>
                </FamilySelect>
                이름
            </ModalBox>
            <ModalBox>
                <TextArea placeholder="내용을 입력해 주세요."></TextArea>
                <ModalBtn> 달에게 보내기 </ModalBtn>
            </ModalBox>
        </Modal>
    );
}

export default WriteModal;
