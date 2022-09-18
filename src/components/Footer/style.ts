import styled from "styled-components";

const FooterTag = styled.footer`
  background-color: var(--greyFooter);
  align-items: center;
  & > div {
    height: 120px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 90%;
  }
`;

export default FooterTag;
