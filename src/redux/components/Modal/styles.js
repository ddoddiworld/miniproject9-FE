import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 30px 20px;
  width: 450px;
  display: ${({ display = "display" }) => (display ? "block" : "none")};
  z-index: 90;
`;

const ModalTitle = styled.h2`
  border-bottom: 1px solid #e4e4e4;
  font-size: 26px;
  padding-bottom: 10px;
  font-family: "yg-jalnan";
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
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-around"};
`;

const InputFild = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin: ${(props) => props.margin || "7px 0px"};
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
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

const TestBtn = styled.button`
  border: none;
  color: black;
  width: 100px;
  height: 30px;
  border-radius: 7px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalP = styled.p`
  font-size: 12px;
  color: #939393;
  margin-top: 20px;
  text-align: ${({ center = "center" }) => (center ? "center" : "inherit")};
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

const Who = styled.p`
  font-family: "yg-jalnan";
  color: #ffa500;
  margin-right: 10px;
  font-size: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  padding: 8px 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  background-color: whitesmoke;
`;

const FamilySelect = styled.select`
  font-family: "yg-jalnan";
  color: #ffa500;
  margin-right: 10px;
  border-radius: 20px;
  padding: 3px;
  width: 140px;
  text-align: center;
  border: 2px solid #ffa500;
  background-color: transparent;
  &:active {
    border: 2px solid #ffa500;
  }
  &:hover {
    cursor: pointer;
  }
  option {
    background-color: white;
    color: #ffa500;
  }
`;

const UserRel = styled.span`
  font-family: "yg-jalnan";
  color: #333;
  margin-right: 10px;
  font-size: 15px;
  background-color: #ffa500;
  color: #fff;
  padding: 7px 10px;
  border-radius: 30px;
`;

const UserName = styled.p`
  font-family: "yg-jalnan";
  color: #555;
  font-size: 20px;
`;

const CloseBtn = styled.button`
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: black;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`;

export default {
  Modal,
  ModalTitle,
  ModalContents,
  ModalBox,
  Who,
  InputFild,
  Input,
  ModalLabel,
  ModalBtn,
  TestBtn,
  ModalP,
  ModalLink,
  TextArea,
  FamilySelect,
  UserName,
  CloseBtn,
  UserRel,
};
