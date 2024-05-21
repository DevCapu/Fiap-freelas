import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { Column, SpacedBetweenRow } from './components/commons/LayoutDirections.tsx';

function App() {

  return (
    <Column>
      <SpacedBetweenRow>
        <h1>Freelas - FIAP</h1>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
        </SpacedBetweenRow>
      <Outlet />     
    </Column>
    
  );
}

export default App;
