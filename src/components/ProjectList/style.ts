import styled, { keyframes } from "styled-components";

interface IStyledProps {
    index: number;
}

const slide = keyframes`
    0%{
        left: -400px;
        opacity: 0;
    }
    100%{
        left: 0;
        opacity: 1;
    }
`;

const gradient = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const List = styled.ul`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: 2px solid var(--greyGradient);
  margin-bottom: 15px;
  animation: ${gradient} 1s forwards;

  & > a{
    text-decoration: none;
  }
  & > h2 {
    position: relative;
    top: -10px;
    font-size: 16px;
    color: var(--greyCategory);
    background-color: white;
    padding: 0px 10px;
    margin-bottom: 15px;
  }
`;

export const Card = styled.li`
  position: relative;
  width: 285px;
  height: 225px;
  border: 1px solid var(--greyGradient);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 20px rgb(0, 0, 0, .3);
  animation: ${slide} ${({index}: IStyledProps) => (index + 1)}s forwards;
  transition: .3s;
  :hover{
    width: 290px;
    height: 230px;
  }

  & > img {
    width: 100%;
    height: 150px;
    border: 1px solid rgb(0, 0, 0, .3);
    border-top: none;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  & > h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }
  & > span {
    font-size: 14px;
    font-weight: 600;
    color: var(--greyCategory);
  }
`;

export default List;
