import { PrimaryButton } from "../../components/commons/Button";
import { Column, SpacedBetweenRow } from "../../components/commons/LayoutDirections";
import { FreelancerData } from "../../components/freelancers/Freelancer";
import { PersonCardLarge, PersonImage, PersonName, PersonStack, PriceValue } from "../../components/freelancers/styles";


const FreelancerDetailsScreen = (freelancer: FreelancerData) => {
    return (
        <PersonCardLarge>
        <Column>
          <SpacedBetweenRow>
            <PersonImage src={freelancer.photo} alt={freelancer.name}  width={"140"} height={"140"}/>
            <Column>
              <PersonName>{freelancer.name }</PersonName>
              <PersonStack>{freelancer.technologies.join(", ")}</PersonStack>
            </Column>
            <PriceValue>R${freelancer.priceByHour}<small>/h</small></PriceValue>
          </SpacedBetweenRow>
          <h2>Bio</h2>
          <p>{freelancer.bio}</p>
          
          <h2>Meus últimos trabalhos</h2>
          <ul>
            {freelancer.lastWorks.map((work) => {
                return (
                    <li>{work}</li>
                )
                })}
          </ul>

          <PrimaryButton>Entrar em contato</PrimaryButton>
        </Column>
      </PersonCardLarge>
    )
}

export default FreelancerDetailsScreen;