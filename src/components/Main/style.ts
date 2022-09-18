import styled, { keyframes } from "styled-components";

const slide = keyframes`
    0%{
        left: -400px;
        opacity: 0;
    }
    100%{
        left: 0;
        opacity: 1;
    }
`

const gradient = keyframes`
    0%{
        opacity: 0;
        font-size: 16px;
    }
    100%{
        opacity: 1;
        font-size:  40px;
    }
`

const MainTag = styled.main`
    padding: 25px 0;
    align-items: center;
    justify-content: center;

    & > div{
        width: 90%;
        justify-content: center;
        align-items: center;

        & > h1{
            font-size: 40px;
            font-weight: 500;
            color: var(--blue);
            margin-bottom: 15px;
            animation: ${gradient} 1s forwards;
        }

        .container{
            position: relative;
            flex-direction: row;
            align-items: center;
            background-color: var(--greyGradient);
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 30px;
            animation: ${slide} 1s forwards;

            & > img{
                width: 74px;
                height: 81px;
                border-radius: 8px;
                margin-right: 10px;
            }
            & > p{
                font-size: 16px;
                font-weight: 500;
            }
        }
    }

`

export default MainTag;