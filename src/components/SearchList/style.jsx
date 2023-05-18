import styled from 'styled-components';
import tableBg from '../../assets/img/tableBg.jpg';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url(${tableBg});
  background-size: cover;
  background-position: center;
  z-index: -10;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-top:117px;
  z-index: -1;
  @media screen and (max-width: 850px) {
    width: 90%;

  }
`;

export const Title = styled.h1`
  font-weight: bold;
  left: 0;
  color: #72efdb;
  margin-top: 33px;
  font-size: 40px;

  @media screen and (max-width: 850px) {
    font-size: 33px;
    text-align: center;
  }
`;

export const List = styled.div`
  margin-top: 40px;
  width: 100%;
  border-radius: 14px;
  background: linear-gradient(
    162deg,
    rgba(12, 29, 98, 1) 0%,
    rgba(13, 30, 109, 1) 46%,
    rgba(6, 19, 75, 1) 100%
  );
  position: relative;
  padding-bottom: 23px;
`;

export const HeadList = styled.div`
  background: rgb(0 26 84);
  height: 103px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  position: relative;
  display: flex;

  @media screen and (max-width: 850px) {
    height: 49px;
  }
`;

export const HeadListItems = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 10px;
  width: 98%;
`;

export const ItemHashtag = styled.p`
  font-weight: bold;
  display: flex;
  font-size: 24px;
  color: rgb(114, 239, 219);
  margin: 10px;
  margin-left: 20px;

  @media screen and (max-width: 850px) {
    font-size: 20px;
    margin-bottom: 0;
    margin-left: 15px;
  }
`;
export const Items = styled.div`
  display: flex;
  width: auto;
  margin: 0;
  right: 20px;
  position: absolute;
  padding: 0;
`;

export const Item = styled.p`
  font-weight: bold;
  display: flex;
  font-size: 24px;
  color: rgb(114, 239, 219);
  margin: 10px;
  margin-left: 119px;

  @media screen and (max-width: 850px) {
    font-size: 20px;
    margin-left: 15px;
  }
`;

//List

export const TextList = styled.div`
  display: flex;
  width: 98%;
  height: 50px;
  margin: auto;
  margin-top: 23px;
  border-bottom: ;
  box-shadow: 0px 1px 0px 0px rgb(219 220 227 / 16%);
`;

export const TextHashtag = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 1;
  margin-left: 20px;
  color: white;
  align-items: center;
  width:100px;
 

  @media screen and (max-width: 850px) {
    font-size: 18px;
    height: 50px;
    margin-left: 15px;
  }
`;

export const Texts = styled.div`
  display: flex;
  width: auto;
  margin: 0;
  right: 10px;
  position: absolute;
  padding: 0;
  height: 50px;
`;

export const Text = styled.p`
  font-weight: 1;
  display: flex;
  font-size: 24px;
  color: white;
  margin: 10px;
  margin-left: 119px;
  align-items: center;

  @media screen and (max-width: 850px) {
    font-size: 18px;
    margin-left: 15px;
  }
`;
