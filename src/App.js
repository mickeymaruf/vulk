import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {path: '/', element: <Home />},
        {path: 'products', loader: () => fetch('https://openapi.programming-hero.com/api/phones?search=iphone'), element: <Products />},
        {path: 'pricing', element: <Pricing />},
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
