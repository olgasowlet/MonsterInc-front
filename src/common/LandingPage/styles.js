import styled from "styled-components";
import myImage from "../../Images/background.png";

export const StyledLandingPage = styled.main`
    background-image: url("${myImage}");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vmin;
    width: 100%;
`;