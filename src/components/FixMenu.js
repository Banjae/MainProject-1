import React from "react";
import { Link } from "react-router-dom";

// FontAwesome Icon 적용
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// tailwind-styled-component
import tw from "tailwind-styled-components";
import { useSelector } from "react-redux";

const Fixmenu = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Fix>
        <FixUl>
          <FixLi>
            <Link to="/" className="flex flex-col">
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </Link>
          </FixLi>
          <FixLi>
            <Link to="/AllShop" className="flex flex-col">
              <FontAwesomeIcon icon={faUtensils} />
              <span>상점</span>
            </Link>
          </FixLi>
          <FixLi>
            <Link to="/Mypage" className="flex flex-col">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>장바구니</span>
            </Link>
          </FixLi>
          <FixLi>
            {user.ciNickName === "" ? (
              <Link to="/Login" className="flex flex-col">
                <FontAwesomeIcon icon={faUser} />
                <span>마이페이지</span>
              </Link>
            ) : (
              <Link to="/Mypage" className="flex flex-col">
                <FontAwesomeIcon icon={faUser} />
                <span>마이페이지</span>
              </Link>
            )}
          </FixLi>
        </FixUl>
      </Fix>
    </>
  );
};

const Fix = tw.div`
  fixed
  bottom-0
  w-full
  bg-white
  center
  p-2
  z-20
  `;

const FixUl = tw.ul`
  flex
  justify-around
  `;

const FixLi = tw.li`
  text-xl
  text-main
`;

export default Fixmenu;
