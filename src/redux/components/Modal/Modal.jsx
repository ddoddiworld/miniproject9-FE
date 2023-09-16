import React from "react";

function Modal() {
  return (
    <>
    <div class="modal">
    <h2 class="modalTitle">로그인</h2>
    {/* <!-- 모달 내용 --> */}
    <div class="modalContents">
      <div class="inputFild">
        {/* <!-- <p>이메일</p> --> */}
        <input type="text" placeholder="이메일을 입력해 주세요">
      </div>
      <div class="inputFild">
        {/* <!-- <p>비밀번호</p> --> */}
        <input type="password" placeholder="비밀번호를 입력해 주세요">
      </div>
    </div>
    {/* <!-- // 모달 내용 --> */}
    <button class="modalBtn">로그인</button>
    <p>회원이 아니신가요? <span class="modalLink">회원가입 하기</span></p>
  </div></>
  )
}

export default Modal;
