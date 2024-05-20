import './App.css';
import { FreelancerData } from './components/freelancers/Freelancer.tsx';
import FreelancerDetailsScreen from './screens/FreelancerDetails/FreelancerDetailsScreen.tsx';

function App() {
  let items: FreelancerData[] = [
    {
      name: "Felipe Moreno",
      photo: "https://placedog.net/70",
      id: 0,
      technologies: ["Kotlin", "Java", "Swift"],
      priceByHour: "50", // Mock price
      github: "https://github.com/felipe-moreno", // Mock Github profile
      linkedin: "https://www.linkedin.com/in/felipe-moreno/", // Mock LinkedIn profile
      bio: "Experienced mobile developer passionate about building beautiful and functional apps.", // Mock bio
      city: "São Paulo, Brazil", // Mock location
      available: true, // Mock availability
      lastWorks: ["E-commerce app", "Fitness tracker app"], // Mock previous works
    },
    {
      name: "Paulo Silva",
      photo: "https://placedog.net/70",
      id: 1,
      technologies: ["React", "Vue", "Angular"],
      priceByHour: "70", // Mock price
      github: "https://github.com/paulo-silva", // Mock Github profile
      linkedin: "https://www.linkedin.com/in/paulo-silva/", // Mock LinkedIn profile
      bio: "Front-end developer with expertise in building interactive and user-friendly web applications.", // Mock bio
      city: "Rio de Janeiro, Brazil", // Mock location
      available: true, // Mock availability
      lastWorks: ["Company website redesign", "Social media platform development"], // Mock previous works
    },
    {
      name: "Bruno Costa",
      photo: "https://placedog.net/70",
      id: 2,
      technologies: ["C#", "Spring", "Laravel"],
      priceByHour: "60", // Mock price
      github: "https://github.com/bruno-costa", // Mock Github profile
      linkedin: "https://www.linkedin.com/in/bruno-costa/", // Mock LinkedIn profile
      bio: "Backend developer skilled in building scalable and high-performance web services.", // Mock bio
      city: "Curitiba, Brazil", // Mock location
      available: false, // Mock availability
      lastWorks: ["E-learning platform backend", "API development for mobile app"], // Mock previous works
    },
    {
      name: "Davi Oliveira",
      photo: "https://placedog.net/70",
      id: 3,
      technologies: ["Python", "R", "Scala"],
      priceByHour: "80", // Mock price
      github: "https://github.com/davi-oliveira", // Mock Github profile
      linkedin: "https://www.linkedin.com/in/davi-oliveira/", // Mock LinkedIn profile
      bio: "Data scientist with a strong background in data analysis and machine learning.", // Mock bio
      city: "Belo Horizonte, Brazil", // Mock location
      available: true, // Mock availability
      lastWorks: ["Customer churn prediction model", "Sales forecasting analysis"], // Mock previous works
    },
  ];

  let freelancer = items[0]

  return (
    <>
     <FreelancerDetailsScreen 
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
      
      {/* Um botão de contratar que abre um modal pra entrar em contato com a pessoa */}
    </>
  );
}

export default App;
