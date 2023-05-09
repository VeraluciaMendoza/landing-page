import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 40px 20px;
  background-image: url("/images/baner-mobile.jpeg");
  background-size: cover;
  padding-bottom: 16rem;

  .nav-btn {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    visibility: hidden;
    opacity: 0;
    font-size: 1.8rem;

    width: 1.7rem;
    position: relative;
    z-index: 13;

    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
  }

  .nav-close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: white;
  }

  .responsive_nav {
    transform: none;
  }

  @media only screen and (max-width: 1000px) {
    .logo-desktop {
      display: flex;
    }

    .nav-btn {
      visibility: visible;
      opacity: 1;
    }
  }

  @media only screen and (min-width: 1001px) {
    height: 400px;
    background-size: contain;
    background-image: url("/images/baner-desktop.jpeg");
    padding: 40px 80px;

    .logo-mobile {
      display: none;
    }
  }

  @media (min-width: 1350px) {
    height: 500px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;

  .logo-desktop {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 0rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    transition: 1s;
    transform: translateY(-100vh);
    background-color: rgb(143, 62, 145);
    z-index: 1;
  }

  @media only screen and (min-width: 1000px) {
    .logo-desktop {
      display: flex;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  column-gap: 2rem;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    font-weight: 700;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h2`
  margin-top: 9rem;
  padding: 1.5rem 2rem;
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1;
  text-transform: uppercase;

  @media only screen and (min-width: 365px) {
    font-size: 2.65rem !important;
  }

  @media only screen and (min-width: 1001px) {
    width: 400px;
    margin-top: 7rem;
  }
`;

export const HeaderNavbar = styled.nav`
  margin-top: 0.7rem;

  a {
    margin: 0 2rem;
    text-decoration: none;
    color: white;
    font-weight: 800;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 0rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    transition: 1s;
    transform: translateY(-100vh);
    background-color: rgb(143, 62, 145);
    z-index: 1;

    .nav-close-btn {
      position: absolute;
      top: 2rem;
      right: 2rem;
      color: white;
    }

    a {
      font-size: 1.5rem;
    }
  }
`;

export const HeaderLogo = styled.img``;
