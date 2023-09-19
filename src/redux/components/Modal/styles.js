import styled from 'styled-components';
/************************************************
                      모달창
************************************************/
// .modal {position:absolute;top:50%;left:50%;transform:translate(-50%);background-color:#fff;border-radius:20px;padding:30px;width:400px;}
// .modal * {color: #333;}
// .modal .modalTitle {border-bottom: 1px solid #e4e4e4; font-size:26px;padding-bottom:10px;font-family:'yg-jalnan'}
// .modal .modalContents {padding:20px 10px}
// .modal .inputFild {display:flex;align-items: center}
// .modal input {margin: 7px 0;border: 1px solid #e3e3e3;padding:8px 10px; width: 100%}
// .modal input:focus {border: 1px solid #FFA500}
// .modal .modalBtn {background-color: #FFA500; border: none; color: #fff; width:100%;height:40px; border-radius: 10px;}
// .modal p {font-size: 12px; color: #939393; margin-top: 20px; text-align: center}
// .modal p .modalLink {cursor: pointer; color: #FFA500; margin-left:3px}
// .modal p .modalLink:hover {border-bottom: 1px solid #FFA500;}

const Modal = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    width: 450px;
    display: ${({ display = 'display' }) => (display ? 'block' : 'none')};
    z-index: 90;
`;

const ModalTitle = styled.h2`
    border-bottom: 1px solid #e4e4e4;
    font-size: 26px;
    padding-bottom: 10px;
    font-family: 'yg-jalnan';
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: baseline;
    justify-content: space-between;
`;

const ModalContents = styled.div`
    padding: 20px 10px;
`;

const ModalBox = styled.div`
    padding: 20px 10px;

    display: flex;
    align-items: center;
    flex-direction: ${({ column = 'column' }) => (column ? 'column' : 'row')};
    justify-content: space-around;
`;

const InputFild = styled.div`
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    margin: 7px 0;
    border: 1px solid #e3e3e3;
    border-radius: 7px;
    padding: 8px 10px;
    width: 100%;
    &:focus {
        border: 1px solid #ffa500;
    }
`;

const ModalLabel = styled.label`
    font-size: 12px;
    margin: ${({ margin }) => margin};
    width: 90px;
    color: black;
`;

const ModalBtn = styled.button`
    background-color: #ffa500;
    border: none;
    color: #fff;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    margin-top: 20px;
`;

const TestBtn = styled.button`
    border: none;
    color: black;
    width: 100px;
    height: 30px;
    border-radius: 7px;
    margin-left: 10px;
`;

const ModalP = styled.p`
    font-size: 12px;
    color: #939393;
    margin-top: 20px;
    text-align: ${({ center = 'center' }) => (center ? 'center' : 'inherit')};
`;

const ModalLink = styled.span`
    font-size: 12px;
    cursor: pointer;
    color: #ffa500;
    margin-left: 3px;
    &:hover {
        border-bottom: 1px solid #ffa500;
    }
`;

const TextArea = styled.textarea`
    width: 95%;
    height: 200px;
    resize: none;
`;

const FamilySelect = styled.select`
    margin-right: -230px;
`;

const CloseBtn = styled.button`
    border: none;
    border-radius: 4px;
    background-color: white;
    color: black;
    font-size: larger;
`;

export default {
    Modal,
    ModalTitle,
    ModalContents,
    ModalBox,
    InputFild,
    Input,
    ModalLabel,
    ModalBtn,
    TestBtn,
    ModalP,
    ModalLink,
    TextArea,
    FamilySelect,
    CloseBtn,
};
