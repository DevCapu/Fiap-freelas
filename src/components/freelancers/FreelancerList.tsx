import {StyledFreelancerList } from './styles';
import Freelancer, { FreelancerData } from './Freelancer';

interface FreelancerListProps {
    freelancers: FreelancerData[]
}

const FreelancerList = ( freelancers: FreelancerListProps) => {
    return (
        <StyledFreelancerList>
         {
         freelancers.freelancers.map((freelancer: FreelancerData) => (
            <Freelancer 
            key={freelancer.id} 
            name={freelancer.name} 
            id={0}
             photo={freelancer.photo}
              technologies={freelancer.technologies}
              lastWorks={[]} />
        ))
        }
        </StyledFreelancerList>
    )
};

export default FreelancerList;
