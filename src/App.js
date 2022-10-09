import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {path: '/', element: <Home />},
        {path: 'products', element: <Products />},
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
