import { Fragment, useRef, useState } from "react";
import {
  HeaderWrapper,
  HeaderTitle,
  HeaderLogo,
  Navbar,
  NavLinks,
} from "./styled";
import { FaTimes, FaBars } from "react-icons/fa";

export const Header = () => {
  const [closeBtn, setCloseBtn] = useState(false);
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setCloseBtn((prev) => !prev);
  };
  return (
    <Fragment>
      <HeaderWrapper>
        <HeaderLogo
          className="logo-mobile"
          src="logo.svg"
          alt="logo"
          width="120"
        />
        <Navbar ref={navRef}>
          <HeaderLogo
            className="logo-desktop"
            src="logo.svg"
            alt="logo"
            width="120"
          />
          <NavLinks>
            <a href="/#section-about">About</a>
            <a href="/#section-products">Products</a>
            <a href="/#section-support">Support</a>
            <a href="/#">Events</a>
          </NavLinks>
        </Navbar>
        <button className="nav-btn" onClick={showNavBar}>
          {!closeBtn ? <FaBars color="white" /> : <FaTimes color="white" />}
        </button>
        <HeaderTitle>inmerse experiences that deliver</HeaderTitle>
      </HeaderWrapper>
    </Fragment>
  );
};
