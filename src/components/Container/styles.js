import styled from "styled-components";

const StyledContainer = styled.div`

        background-image: url(./images/bg-main-desktop.png);
        background-size: cover;
        width: 500px;
        height: 100vh;
        position: relative;

`;

const StyledCard1 = styled.div`
        position: absolute;
        background-image: url(./images/bg-card-front.png);
        width: 447px;
        height: 245px;
        top: 387px;
        left: 154px;
 `;        
    
const StyledCard2 = styled.div` 
   
        position: absolute;
        background-image: url(./images/bg-card-back.png);
        width: 447px;
        height: 245px;
        top: 690px;
        left: 258px;
    
`;

const StyledCircle = styled.div`

        width: 84px;
        height: 47px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        position: relative;
        top: 20px;
        left: 25px;
`;

const StyledCircle1 = styled.div`
    
   
        width: 47px;
        height: 47px;
        border-radius: 100%;
        background-color: white;
`;

const StyledCircle2 = styled.div`

        width: 21px;
        height: 21px;
        border-radius: 100%;
        border: 1px solid white;
`;

const StyledH1 = styled.h1`

        font-size: 36px;
        font-weight: 500;
        color: white;
        position: relative;
        top: 60px;
        left: 25px;
        
`;

const StyledText = styled.div`

        width: 383px;
        height: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 65px;
        left: 25px;

`;

const StyledName = styled.h3`

        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        color: white;
        text-transform: uppercase;

`;

const StyledCVC = styled.h3`

        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;
        color: white;
        text-transform: uppercase;
        position: relative;
        top: 95px;
        left: 363px;
`;


export {StyledContainer, StyledCard1, StyledCard2 , StyledCircle, StyledCircle1 , StyledCircle2 , StyledH1, StyledText, StyledName, StyledCVC};