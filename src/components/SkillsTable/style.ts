import styled, { css, keyframes } from "styled-components";

interface ISkillContext {
  level: number;
  color: string;
}

const Container = styled.div`
    border-top: 2px solid var(--greyGradient);
    align-items: center;
    margin-top: 15px;
    margin-bottom: 40px;
    height: 500px;
    & > h2{
        position: relative;
        top: -10px;
        background-color: white;
        font-size:  16px;
        color: var(--greyCategory);
        padding: 0px 10px;
        text-align: center;
    }
    & > p{
        font-size: 16px;
        font-weight: 500;
        margin: 25px 0px;
    }
`;

export const Table = styled.div`
  border: 1px solid rgb(0, 0, 0, .3);
  border-radius: 8px;
  padding: 10px;

  & > section {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
    & > h3 {
      font-size: 14px;
      color: var(--greyCategory);
    }
  }
`;

export const SkillBar = styled.span`
    width: ${({ level }: ISkillContext) => level}%;
    
    font-size: 14px;
    font-weight: 600;
    
    color: white;
    background-color: ${({ color }: ISkillContext) => color};
    
    padding: 10px;
    margin: 5px;
    
    border-radius: 0px 8px 8px 0px;
    box-shadow: 2px 2px 4px rgb(0, 0, 0, .3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    animation-duration: ${({level}: ISkillContext) => level / 50}s;
    animation-name: widthBar;
    @keyframes widthBar {
        from{
            width: 0px;
        }
        to{
            width: ${({ level }: ISkillContext) => level};
        }
    }
`;

export default Container;
