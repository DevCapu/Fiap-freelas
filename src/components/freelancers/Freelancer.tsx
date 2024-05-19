import { PersonCard, PersonImage, PersonName, PersonStack, ContactImage, PriceSpan } from './styles';
import { PrimaryButton } from '../commons/Button';
import { Column, Row } from '../commons/LayoutDirections';

export interface FreelancerData {
    id: number;
    photo: string;
    name: string;
    technologies: string[];
    lastWorks: string[];
}

const Freelancer = (freelancer: FreelancerData) => {
    const { id, photo, name, technologies } = freelancer;

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
                <Row>
                    <ContactImage src="https://avatar.iran.liara.run/boy" alt="Github" />
                    <ContactImage src="https://avatar.iran.liara.run/boy" alt="Linkedin" />
                </Row>
                <PriceByHour price={"56"} />

                <PrimaryButton>Ver mais...</PrimaryButton>
            </Column>
        </PersonCard>
    )
}

interface PriceByHourProps {
    price: string
}

const PriceByHour = ({ price }: PriceByHourProps) => {
    return (
        <Row>
            <PriceSpan>valor:</PriceSpan>
            <span>R${price}<small>/h</small></span>
        </Row>
    );
};

export default Freelancer;