import { PersonCard, PersonImage, PersonName, PersonStack, ContactImage, PriceLabel, PriceValue, Chip } from './styles';
import { PrimaryButton } from '../commons/Button';
import { Column, Row, SpacedBetweenRow } from '../commons/LayoutDirections';

export interface FreelancerData {
    id: number;
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

const Freelancer = ({ photo, name, technologies, available, priceByHour }: FreelancerData) => {
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
                            <ContactImage src={"https://avatar.iran.liara.run/boy"} alt="Github" />
                            <ContactImage src="https://avatar.iran.liara.run/boy" alt="linkedIn" />
                        </Row>
                      </div>
                </SpacedBetweenRow>
                <PriceByHour price={priceByHour} />
                <PrimaryButton>Ver mais...</PrimaryButton>
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