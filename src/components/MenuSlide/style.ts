import styled, { css, keyframes } from "styled-components";

interface IStyledProps{
    isHamburguerMenu: boolean;
  }

  const open = keyframes`
  0%{
    right: -300px;
    opacity: 0;
  }
  100%{
    right: 0;
    opacity: 1;
  }
`

const close = keyframes`
  0%{
    right: 0;
    opacity: 1;
  }
  100%{
    right: -300px;
    opacity: 0;
  }
`
const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 90px;
    right: 0;
    z-index: 100;
    height: 100vh;
    width: 80%;
    max-width: 300px;
    background-color: var(--greyBgMenu);

    ${({ isHamburguerMenu }: IStyledProps) =>
    css`
      animation: ${isHamburguerMenu ? open : close}
        0.3s forwards; 
    `}

    .home, .projects, .contact{
        color: white;
        font-size: 18px;
        font-weight: 600;
        padding: 20px;
        width: 100%;
        border-bottom: 4px solid grey;
        border-radius: initial;
        transition: .3s;
        :hover{
            color: var(--blue);
            border-bottom: 4px solid var(--blue);

        }
    }
    
`

export default Menu;