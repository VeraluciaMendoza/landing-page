import styled from "styled-components";

export const ArticleWrapper = styled.article`
  padding: 40px 20px;

  .more-2 {
    padding: 0.7rem 2rem;
    color: black;
    border: 2px solid black;
    display: block;
    line-height: 1;
    text-align: center;
    margin: 1rem auto;
    margin-top: 2rem;
    width: 135px;
    cursor: pointer;
    display: block;
    font-weight: 300;
  }

  @media (min-width: 1000px) {
    padding: 40px 80px;

    .more-2 {
      display: none;
    }
  }
`

export const TitleContainer = styled.div`
  h1 {
    text-align: center;
    font-weight: 300;
    text-transform: uppercase;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: #000;
  }

  p {
    display: none;
  }

  @media (min-width: 1001px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 3rem 0;
      text-align: left;
    }

    p {
      padding: 0.7rem 2rem;
      color: black;
      border: 2px solid black;
      display: block;
      line-height: 1;
      text-align: center;
      margin: 1rem auto;
      margin-top: 2rem;
      width: 135px;
      cursor: pointer;
      height: 100%;
      display: block;
      font-weight: 300;
      margin: 0;
    }
  }
`

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  @media (min-width: 1001px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (min-width: 1350px) {
    gap: 2rem;
    justify-content: center;
  }
`

export const CardCreation = styled.div`
  background-image: url(${({ imagen }) => `${imagen}.jpeg`});
  padding-top: 5rem;
  padding-left: 1.5rem;
  text-transform: uppercase;
  color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 140px;
  box-shadow: inset 0px 0px 150px 0px rgba(0,0,0,0.6);
  transition: 0.2s ease;

  :hover {
    transform: scale(1.05);
  }

  p {
    width: 125px;
    font-size: 1.5rem;
    letter-spacing: 0.8px;
  }

  @media (min-width: 1000px) {
    height: 400px;
    width: 190px;
    display: flex;
    background-image: url(${({ imagen }) => `${imagen}-mobile.jpeg`});

    p {
      align-self: flex-end;
      margin-bottom: 2rem;
      font-size: 2rem;
      width: 160px;
    }
  }

  @media (min-width: 1350px) {
    width: 250px;
    height: 500px;
  }
`