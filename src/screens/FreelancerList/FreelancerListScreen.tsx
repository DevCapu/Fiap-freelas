import FreelancerList from "../../components/freelancers/FreelancerList"
import { getFreelas } from "../../services/FreelancersService"



const FreelancerListScreen = () => {
    const freelancers = getFreelas()
    return (
        <FreelancerList freelancers={freelancers}/>
    )

}

export default FreelancerListScreen