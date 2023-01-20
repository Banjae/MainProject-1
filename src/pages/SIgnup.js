// Signup page
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// tailwind-styled-component
import tw from "tailwind-styled-components";
import axios from "axios";

const Title = tw.div`
flex
justify-start 
ml-3
font-semibold
text-2xl
text-slate-700
`;

const Bt = tw.div`
  flex
  justify-start
  m-3
  p-2
  border-2
  rounded-lg
  border-gray-300
  h-12
  font-medium
  text-xl
  bg-white
`;

const Check = tw.button`
font-medium
text-xs
bg-gray-300
border-2
  rounded-lg
  border-gray-300

`;

const Join = tw.button`
w-1/2
px-8
py-3
bg-main
border
border-main
rounded-lg
text-base
text-white
text-2xl
font-normal
mt-20
mb-20
`;

const SIgnup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");

  const registFunc = (e) => {
    e.preventDefault();
    //  1. 빈문자열 일때, 경고창 띄우기
    if (!name) {
      return alert("이름을 입력하세요");
    }
    if (!id) {
      return alert("아이디를 입력하세요");
    }
    if (!pw) {
      return alert("비밀번호를 입력하세요");
    } else if (pw.length < 8) {
      alert("비밀번호는 8자 이상 쓰래이");
    }

    if (!pwCheck) {
      return alert(" 비밀번호 확인을 입력하세요");
    }

    // 비밀번호가 같은지 비교처리
    if (pw !== pwCheck) {
      return alert("비밀번호는 같아야 합니다.");
    }

    if (!nickName) {
      return alert(" 닉네임을 입력하세요");
    }
    if (!phoneNum) {
      return alert(" 휴대번호를 입력하세요");
    }
    if (!birth) {
      return alert(" 생년월일을 입력하세요");
    }
    if (!email) {
      return alert(" 이메일을 입력하세요");
    }

    // 1. 아이디 검사요청
    // if (!idCheck) {
    //   return alert("아이디 중복검사를 해주세요.");
    // }

    let body = {
      ciId: id,
      ciPwd: pw,
      ciCheckPwd: pwCheck,
      ciName: name,
      ciNickName: nickName,
      ciEmail: email,
      ciPhone: phoneNum,
      ciBirthday: birth,
      ciUiSeq: 1,
    };

    axios
      .post("http://192.168.0.56:8888/member/join", body)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message);
      });
  };

  // 2. 아이디 중복검사
  // const [idCheck, setIdCheck] = useState(false);

  // const idCheckFn = (e) => {
  //   e.preventDefault();
  //   // 아이디 입력되었는지 체크
  //   if (!id) {
  //     return alert("아이디를 입력해주세요");
  //   }

  //   // 아이디 존재 여부 파악
  //   const body = {
  //     ciId: id,
  //   };
  //   axios
  //     .post("http://192.168.0.56:8888/member/join", body)
  //     .then((response) => {
  //       // 서버에서 정상적 처리 완료
  //       if (response.data.success) {
  //         if (response.data.check) {
  //           // 등록가능
  //           // 사용자 중복체크 완료
  //           setIdCheck(true);
  //           alert("등록이 가능합니다.");
  //         } else {
  //           // 등록 불가능
  //           setIdCheck(false);
  //           alert("이미 등록된 닉네임 입니다.");
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <Title className="flex justify-center mb-10">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        회원가입
      </Title>

      <div className="flex flex-col items-center">
        <div>
          <Title>이름</Title>
          <Bt>
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Bt>

          <Title>아이디</Title>
          <Bt>
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
              minLength={3}
            />
            <Check>중복체크</Check>
            {/* 2. 아이디 중복검사
            <Check onClick={(e) => idCheckFn(e)}> 중복체크</Check> */}
          </Bt>

          <Title>비밀번호</Title>
          <Bt>
            <input
              type="password"
              required
              value={pw}
              maxLength={16}
              minLength={8}
              onChange={(e) => setPw(e.target.value)}
              placeholder="비밀번호를 입력해주세요"
            />
          </Bt>

          <Title>비밀번호 확인</Title>
          <Bt>
            <input
              type="password"
              required
              value={pwCheck}
              maxLength={16}
              minLength={8}
              onChange={(e) => setPwCheck(e.target.value)}
              placeholder="비밀번호를 확인해주세요"
            />
          </Bt>

          <Title>닉네임</Title>
          <Bt>
            <input
              type="text"
              placeholder="닉네임을 입력해주세요"
              required
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              maxLength={10}
              minLength={2}
            />
            <Check>중복체크</Check>
          </Bt>

          <Title>휴대폰 번호</Title>
          <Bt>
            <input
              type="tell"
              required
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              placeholder="휴대폰 번호를 입력해주세요"
            />
          </Bt>

          <Title>생년월일</Title>
          <Bt>
            <input
              type="text"
              required
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              placeholder="생년월일을 입력해주세요"
            />
          </Bt>

          {/* 서비스 이용장소 */}
          <Title for="service-select">서비스 이용장소</Title>
          <Bt>
            <select name="" id="service-select">
              <option value="">--Please choose an option--</option>
              <option value="">00 대학</option>
              <option value="">00 대학</option>
              <option value="">00 대학</option>
              <option value="">00 대학</option>
              <option value="">00 대학</option>
              <option value="">00 대학</option>
            </select>
          </Bt>

          <Title>이메일</Title>
          <Bt>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
            />
            <Check>중복체크</Check>
          </Bt>
        </div>
        <Join
          onClick={(e) => {
            registFunc(e);
          }}
        >
          가입하기
        </Join>
      </div>
    </>
  );
};

export default SIgnup;
