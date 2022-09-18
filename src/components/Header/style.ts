import styled, { css, keyframes } from "styled-components";

interface IStyledProps{
  isHamburguerMenu: boolean;
}

const dropDown = keyframes`
  0%{
    top: -90px;
    opacity: 0;
  }
  100%{
    top: 0;
    opacity: 1;
  }
`

const open = keyframes`
  0%{
    left: 0px;
    opacity: 1;
  }
  100%{
    left: -150px;
    opacity: 0;
  }
`

const close = keyframes`
  0%{
    left: -150px;
    opacity: 0;
  }
  100%{
    left: 0px;
    opacity: 1;
  }
`

const gira45 = keyframes`
  0%{
    transform: rotate(0deg);
    top: 0;
  }
  100%{
    transform: rotate(45deg);
    top: 19px;
  }
`

const gira0 = keyframes`
  0%{
    transform: rotate(45deg);
    top: 19px;
  }
  100%{
    transform: rotate(0deg);
    top: 0px;
  }
`

const gira90 = keyframes`
  0%{
    transform: rotate(0deg);
    top: 0px;
  }
  100%{
    transform: rotate(-45deg);
    top: -19px;
  }
`

const gira00 = keyframes`
  0%{
    transform: rotate(-45deg);
    top: -19px;
  }
  100%{
    transform: rotate(0deg);
    top: 0px;
  }
`
 
const HeaderTag = styled.header`
  position: relative;
  background-color: var(--black);
  height: 90px;

  justify-content: center;
  align-items: center;

  animation: ${dropDown} 1s forwards ;

  & > div {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;

    & > img {
      width: 70px;
    }
  }
`;

export const Hamburguer = styled.button`
  position: relative;
  width: 50px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bar1,
  .bar2,
  .bar3 {
    position: relative;
    width: 50px;
    height: 7px;
    background-color: white;
    border-radius: 15px;
  }

  .bar1{
    ${({ isHamburguerMenu }: IStyledProps) =>
    css`
      animation: ${isHamburguerMenu ? gira45 : gira0}
        0.5s forwards; 
    `}
  }

  .bar2{
    ${({ isHamburguerMenu }: IStyledProps) =>
    css`
      animation: ${isHamburguerMenu ? open : close}
        0.7s forwards;
    `}
  }

  .bar3{
    ${({ isHamburguerMenu }: IStyledProps) =>
    css`
      animation: ${isHamburguerMenu ? gira90 : gira00}
        0.5s forwards;
    `}
  }
`;

export default HeaderTag;
