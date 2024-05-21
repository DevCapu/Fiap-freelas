import { Navigate, redirect, useParams } from "react-router-dom";
import { PrimaryButton } from "../../components/commons/Button";
import { Column, SpacedBetweenRow } from "../../components/commons/LayoutDirections";
import { PersonCardLarge, PersonImage, PersonName, PersonStack, PriceValue } from "../../components/freelancers/styles";
import { findFreela } from "../../services/FreelancersService";


const FreelancerDetailsScreen = () => {
    const { id } = useParams()

    const freelancer = findFreela(id!!)
    
    if (!freelancer) {
        return <Navigate to={"/"}/>
    }

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
            {freelancer.lastWorks.map((work) => (<li>{work}</li>))}
          </ul>
            {freelancer.available ? (<a href={`https://www.linkedin.com/in/${freelancer.linkedin}`}><PrimaryButton>Entrar em contato</PrimaryButton></a>) : (<PrimaryButton disabled={true}>Indisponível</PrimaryButton>)}
        </Column>
      </PersonCardLarge>
    )
}

export default FreelancerDetailsScreen;
