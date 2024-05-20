import styled from 'styled-components';

export const StyledFreelancerList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    gap: 40px;
`;

const PersonCard = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 34px;
    border: 1px solid #ccc;
    border-radius: 36px;
    background-color:#F3F3F3; 
    color: #333333;
`;

const PersonCardLarge = styled(PersonCard)`
    width: 100%;
`;

const PersonImage = styled.img<{ $width?: string; $height?: string;}>`
    width: ${props => props.width ? props.$width+"px" :  "70px" };
    height: ${props => props.height ? props.$height+"px" : "70px"};
    border-radius: 50%;
    margin-right: 16px
`;

const PersonName = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
    margin-bottom: 12px;
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

const Chip = styled.span<{ $available?: boolean; }>`
    background: ${props => props.$available ? "#52be3f4d" : "#bf4f744f"};
    color: ${props => props.$available ? "#52be3f" : "#BF4F74"};
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 0.8rem;
`;

const PriceLabel = styled.span`
    color: #B4B4B4;
    font-size: 1rem;
`;

const PriceValue = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    color: #333333;
`;


export { PersonCard, PersonImage, PersonName, PersonCardLarge,PersonStack, ContactImage, Chip, PriceLabel, PriceValue }