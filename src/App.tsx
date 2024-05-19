import './App.css';
import { FreelancerData } from './components/freelancers/Freelancer.tsx';
import FreelancerList from './components/freelancers/FreelancerList.tsx';

function App() {
  let items: FreelancerData[] = [
    {
      name: "Felipe Moreno Borges",
      photo: "https://placedog.net/70",
      id: 0,
      technologies: ["Kotlin", "Java", "Swift"],
      lastWorks: []
    },
    {
      name: "Paulo",
      photo: "https://placedog.net/70",
      id: 0,
      technologies: [],
      lastWorks: []
    },
    {
      name: "Bruno",
      photo: "https://placedog.net/70",
      id: 0,
      technologies: [],
      lastWorks: []
    },
    {
      name: "David",
      photo: "https://placedog.net/70",
      id: 0,
      technologies: [],
      lastWorks: []
    }
  ]

  return (
    <>
      <FreelancerList freelancers={items} />
    </>
  );
}

export default App;
