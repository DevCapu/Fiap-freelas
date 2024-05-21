import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FreelancerDetailsScreen from './screens/FreelancerDetails/FreelancerDetailsScreen.tsx';
import FreelancerListScreen from './screens/FreelancerList/FreelancerListScreen.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <FreelancerListScreen />
      },
      {
        path: "freelancer/:id",
        element: <FreelancerDetailsScreen />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
