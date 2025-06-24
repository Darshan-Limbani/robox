import './App.css'
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes.jsx";
import { PointsProvider } from "./PointsProvider.jsx";

function App() {

  return (
    <div className="flex h-full flex-col justify-between items-center">
      <PointsProvider>
        <RouterProvider router={router} />
      </PointsProvider>
    </div>
  )
}

export default App
