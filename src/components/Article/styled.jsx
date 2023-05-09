import styled from "styled-components";

export const ArticleWrapper = styled.article`
  padding: 40px 20px;
  padding-top: 5rem;

  @media (min-width: 1001px) {
    padding: 40px 80px;
    display: flex;
    justify-content: flex-start;
    position: relative;
  }
`

export const ArticleImage = styled.div`
  img {
    display: block;
    width: 330px;
    margin: 1rem auto;
  }

  @media (min-width: 1001px) {
    display: block;
    width: 600px;

    img {
      width: 100%;
    }
  }

  @media (min-width: 1350px) {
    width: 700px;
  }
`

export const ArticleText = styled.div`
  h1 {
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
    width: 300px;
    margin: 0 auto;
    font-size: 2rem;
    margin-top: 3rem;
    color: #000
  }

  p {
    text-align: center;
    font-family: var(--font-alata);
    color: hsl(0, 0%, 41%);
    padding-top: 1.2rem;
    width: 300px;
    margin: 0 auto;
    line-height: 1.7;
  }

  @media (min-width: 1001px) {
    position: absolute;
    background: white;
    right: 0;
    bottom: 0;
    width: 500px;
    padding: 4.5rem;

    h1 {
      font-size: 2.5rem;
      width: 100%;
      margin-top: 0;
      text-align: left
    }

    p {
      width: 100%;
      text-align: left;
      font-size: 0.83rem;
    }
  }

  @media (min-width: 1350px) {
    bottom: 0;
    right: 20%;
  }
`