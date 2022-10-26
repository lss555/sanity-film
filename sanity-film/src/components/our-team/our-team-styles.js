import styled from 'styled-components';

export const OurTeamContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  min-height: 100vh;
  max-width: 1200px;
`;

export const TopHalf = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 30vh;
  
`;

export const BottomHalf = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  margin-top: 5rem;
`;

export const TopHalfTitle = styled.h1`
  margin-right: auto;
  margin-left: auto;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  color: white;
`;

export const TopHalfSubTitle = styled.h2`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  color: white;
`;

export const OurTeamBody = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  color: white;
  @media screen and (max-width: 820px) {
    margin-top: 17rem;
  }
  @media screen and (max-width: 512px) {
    margin-top: 5rem;
  }
  @media screen and (max-width: 415px) {
    margin-top: 3rem;
  }
`;

export const AuthorPicture = styled.img`
  display: flex;
  border-radius: 50%;
  height: 100%;
  
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 820px) {
    width: 70%;
    height: auto;
    justify-content: center;

  }
`;

export const AuthorContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 3rem auto 3rem auto;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media screen and (max-width: 820px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
  }
`;