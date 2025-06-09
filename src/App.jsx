import './App.css'
import { RouterProvider } from "react-router-dom";
import routers from "./Router/Routes.jsx";
import PageWrapper from "./Pages/PageWrapper.jsx";
import { PointsProvider } from "./PointsProvider.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className={"flex h-full flex-col justify-between overflow-auto items-center"}>
      <PointsProvider>
        <PageWrapper>
          <RouterProvider router={routers}/>
        </PageWrapper>
      </PointsProvider>
      {/*<Footer/>*/}
    </div>
  )
}

export default App
