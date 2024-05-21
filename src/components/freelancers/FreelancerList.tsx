import {StyledFreelancerList } from './styles';
import Freelancer, { FreelancerData } from './Freelancer';
import { Link } from 'react-router-dom';

interface FreelancerListProps {
    freelancers: FreelancerData[]
}

const FreelancerList = ({freelancers}: FreelancerListProps) => {
    return (
        <StyledFreelancerList>
         {
         freelancers.map((freelancer: FreelancerData) => (
                <Freelancer
                    key={freelancer.id}
                    id={freelancer.id}
                    name={freelancer.name}
                    photo={freelancer.photo}
                    technologies={freelancer.technologies}
                    priceByHour={freelancer.priceByHour}
                    github={freelancer.github}
                    linkedin={freelancer.linkedin}
                    bio={freelancer.bio}
                    city={freelancer.city}
                    available={freelancer.available}
                    lastWorks={freelancer.lastWorks}
                />
        ))
        }
        </StyledFreelancerList>
    )
};

export default FreelancerList;
