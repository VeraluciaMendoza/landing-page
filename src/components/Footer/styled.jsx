import styled from "styled-components";

export const FooterWrapper = styled.footer`
  padding: 40px 20px;
  background: black;
  color: white;

  @media (min-width: 1000px) {
    padding: 40px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLinks = styled.div`
  text-align: center;

  div {
    margin-top: 2rem;
  }

  a {
    font-size: 18px;
    text-decoration: none;
    color: white;
    margin-bottom: 1.7rem;
    display: block;
  }

  @media (min-width: 1000px) {
    a {
      font-size: 1rem;
    }

    img {
      display: flex;
      margin: 0!important;
    }

    div {
      display: flex;
      column-gap: 2rem;
      text-align: left;
      justify-content: flex-end;
    }
  }
`

export const FooterImages = styled.div`
  margin-top: 3.4rem;

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  p {
    text-align: center;
    margin-top: 1.6rem;
  }

  @media (min-width: 1000px) {
    margin: 0;
  }
`