import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PlanDetails from "./components/PlanDetails";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Main from "./layouts/Main";

export const TrialContext = createContext(undefined);

function App() {
  const [trial, setTrial] = useState(false);
  const [planId, setPlanId] = useState(undefined);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'products', loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone'), element: <Products /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'pricing/:id', loader: ({ params }) => params.id, element: < PlanDetails /> },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return (
    <TrialContext.Provider value={{trial, setTrial, planId, setPlanId}}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </TrialContext.Provider>
  );
}

export default App;
