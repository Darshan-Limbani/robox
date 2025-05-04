import './App.css'
import { RouterProvider } from "react-router-dom";
import routers from "./Router/Routes.jsx";
import PageWrapper from "./Pages/PageWrapper.jsx";
import { PointsProvider } from "./PointsProvider.jsx";

function App() {
  
  return (
    <PointsProvider>
      <PageWrapper>
        <RouterProvider router={routers}/>
      </PageWrapper>
    </PointsProvider>
  )
}

export default App
