import './App.css'
import { RouterProvider } from "react-router-dom";
import routers from "./Router/Routes.jsx";
import PageWrapper from "./Pages/PageWrapper.jsx";

function App() {
  
  return (
    <PageWrapper>
      <RouterProvider router={routers}/>
    </PageWrapper>
  )
}

export default App
