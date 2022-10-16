import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PlanDetails from "./components/PlanDetails";
import Pricing from "./components/Pricing";
import Register from "./components/Register";
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
        { path: 'pricing', element: <Pricing /> },
        { path: 'pricing/:id', loader: ({ params }) => params.id, element: < PlanDetails /> },
        // firebase
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  return (
    <TrialContext.Provider value={{trial, setTrial, planId, setPlanId}}>
      <div className="App min-h-screen bg-slate-900 text-white">
        <RouterProvider router={router} />
      </div>
    </TrialContext.Provider>
  );
}

export default App;
