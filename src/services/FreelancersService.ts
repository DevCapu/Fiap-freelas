import { FreelancerData } from "../components/freelancers/Freelancer";

export function getFreelas(): FreelancerData[] {
    let items: FreelancerData[] = [
        {
          name: "Felipe Moreno",
          photo: "https://avatars.githubusercontent.com/u/19232807?v=4",
          id: "devcapu",
          technologies: ["Kotlin", "Java", "Swift"],
          priceByHour: "50", 
          github: "https://github.com/devcapu",
          linkedin: "https://www.linkedin.com/in/felipe-moreno/",
          bio: "Experienced mobile developer passionate about building beautiful and functional apps.",
          city: "São Paulo, Brazil",
          available: true,
          lastWorks: ["E-commerce app", "Fitness tracker app"],
        },
        {
          name: "Paulo George",
          photo: "https://i.ibb.co/jZCnv4z/Whats-App-Image-2024-05-18-at-22-50-50.jpg",
          id: "paulo",
          technologies: ["React", "Vue", "Angular"],
          priceByHour: "70", 
          github: "https://github.com/pauloricha",
          linkedin: "https://www.linkedin.com/in/paulo-silva/",
          bio: "Front-end developer with expertise in building interactive and user-friendly web applications.",
          city: "Rio de Janeiro, Brazil",
          available: true,
          lastWorks: ["Company website redesign", "Social media platform development"],
        },
        {
          name: "Bruno Vieira",
          photo: "https://i.ibb.co/NyNWpqx/Whats-App-Image-2024-05-18-at-20-26-51.jpg",
          id: "bruno",
          technologies: ["C#", "Spring", "Laravel"],
          priceByHour: "60", 
          github: "https://github.com/BrunoVieiraSouza",
          linkedin: "https://www.linkedin.com/in/bruno-costa/",
          bio: "Backend developer skilled in building scalable and high-performance web services.",
          city: "Curitiba, Brazil",
          available: false,
          lastWorks: ["E-learning platform backend", "API development for mobile app"],
        },
        {
          name: "Davi Pinedo",
          photo: "https://i.ibb.co/bKgwTzf/Whats-App-Image-2024-05-18-at-21-46-02.jpg",
          id: "pinedo",
          technologies: ["Python", "R", "Scala"],
          priceByHour: "80", 
          github: "https://github.com/davipinedo",
          linkedin: "https://www.linkedin.com/in/davi-oliveira/",
          bio: "Data scientist with a strong background in data analysis and machine learning.",
          city: "Belo Horizonte, Brazil",
          available: true,
          lastWorks: ["Customer churn prediction model", "Sales forecasting analysis"],
        },
      ];

    return items;
}

export function findFreela(id: string): FreelancerData | undefined {
    const freelancer = getFreelas().find(freelancer => freelancer.id === id)
    return freelancer
}