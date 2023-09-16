import styled from "styled-components";

/************************************************
                      모달창
************************************************/
.modal {position:absolute;top:50%;left:50%;transform:translate(-50%);background-color:#fff;border-radius:20px;padding:30px;width:400px;}
.modal * {color: #333;}
.modal .modalTitle {border-bottom: 1px solid #e4e4e4; font-size:26px;padding-bottom:10px;font-family:'yg-jalnan'}
.modal .modalContents {padding:20px 10px}
.modal .inputFild {display:flex;align-items: center}
.modal input {margin: 7px 0;border: 1px solid #e3e3e3;padding:8px 10px; width: 100%}
.modal input:focus {border: 1px solid #FFA500}
.modal .modalBtn {background-color: #FFA500; border: none; color: #fff; width:100%;height:40px; border-radius: 10px;}
.modal p {font-size: 12px; color: #939393; margin-top: 20px; text-align: center}
.modal p .modalLink {cursor: pointer; color: #FFA500; margin-left:3px}
.modal p .modalLink:hover {border-bottom: 1px solid #FFA500;}