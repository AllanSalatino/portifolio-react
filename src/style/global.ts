import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    body, header, main, footer, div, section, ul, li{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        width: 100%;

        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style: none;
    }

    :root{
        --black: #111111;
        --blue: #4169E1;
        --greyText: #C1C1C1;
        --greyCategory: #848383;
        --greyBgProjects: #474747;
        --greyBgMenu: #353535;
        --greyGradient: rgb(217, 217, 217, 20%);
        --greyFooter: #F2F2F2;
    }

    button, select{
        padding: 0;
        margin: 0;

        background-color: transparent;
        border: none;
        border-radius: 5px;
        
        cursor: pointer;
    }

    input{
        padding: 0;
        margin: 0;

        background-color: transparent;
        border: none;
        border-radius: 5px;
        
        cursor: pointer;

        outline: none;
    }

    h1, h2, h3, p, span{
        margin: 0;
        padding: 0;
        color: var(--black);
        font-family: 'Montserrat', sans-serif;
    }
`;

export default Global;
