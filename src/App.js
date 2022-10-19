import { createContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router";

export const TrialContext = createContext(undefined);

function App() {
  const [trial, setTrial] = useState(false);
  const [planId, setPlanId] = useState(undefined);

  return (
    <TrialContext.Provider value={{ trial, setTrial, planId, setPlanId }}>
      <div className="App min-h-screen bg-slate-900 text-white">
        <RouterProvider router={router} />
      </div>
    </TrialContext.Provider>
  );
}

export default App;
