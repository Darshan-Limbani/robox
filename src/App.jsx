import './App.css'
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes.jsx";
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
    <div className="flex h-full flex-col justify-between items-center">
      <PointsProvider>
        <RouterProvider router={router} />
      </PointsProvider>
    </div>
  )
}

export default App
