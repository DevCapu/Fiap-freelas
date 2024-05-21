import { PersonCard, PersonImage, PersonName, PersonStack, ContactImage, PriceLabel, PriceValue, Chip } from './styles';
import { PrimaryButton } from '../commons/Button';
import { Column, Row, SpacedBetweenRow } from '../commons/LayoutDirections';
import { Link } from 'react-router-dom';

export interface FreelancerData {
    id: string;
    photo: string;
    name: string;
    technologies: string[];
    priceByHour: string,
    github: string,
    linkedin: string,
    bio: string,
    city: string,
    available: boolean,
    lastWorks: string[];
}

const Freelancer = ({ id, photo, name, technologies, github, linkedin, available, priceByHour }: FreelancerData) => {
    return (
        <PersonCard>
            <Column>
                <Row>
                    <PersonImage src={photo} alt="Person image" />
                    <Column>
                        <PersonName>{name}</PersonName>
                        <PersonStack>{technologies.join(", ")}</PersonStack>
                    </Column>
                </Row>
                <SpacedBetweenRow>
                    <Chip $available={available}>{available ? "Disponível" : "Indisponível" }</Chip>
                    <div>
                        <Row>
                            <Link to={github}> <ContactImage src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt="Github" /> </Link>
                            <Link to={`https://www.linkedin.com/in/${linkedin}`}>
                                <ContactImage src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt="linkedIn" />
                            </Link>
                        </Row>
                      </div>
                </SpacedBetweenRow>
                <PriceByHour price={priceByHour} />
                <Link to={`freelancer/${id}`}>
                     <PrimaryButton>Ver mais...</PrimaryButton>
                </Link>
            </Column>
        </PersonCard>
    )
}

interface PriceByHourProps {
    price: string
}

export const PriceByHour = ({ price }: PriceByHourProps) => {
    return (
        <SpacedBetweenRow>
            <PriceLabel>valor</PriceLabel>
            <PriceValue>R${price}<small>/h</small></PriceValue>
        </SpacedBetweenRow>
    );
};

export default Freelancer;