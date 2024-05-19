import styled from 'styled-components';

export const StyledFreelancerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
`;

const PersonCard = styled.div`
    min-width: 300px;
    max-width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 34px;
    border: 1px solid #ccc;
    border-radius: 36px;
    background-color:#F3F3F3; 
    color: #333333;
`;

const PersonImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 20px;
    margin-right: 16px
`;

const PersonName = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
`;

const PersonStack = styled.span`
    font-size: 1rem;
    font-weight: regular;
    color: #858484;
`;

const ContactImage = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-bottom: 20px;
    margin-right: 16px
`;

const PriceSpan = styled.span`
    margin-right: 2px;
    color: #333333;
    font-weight: bolder;
`;


export { PersonCard, PersonImage, PersonName, PersonStack, ContactImage, PriceSpan }