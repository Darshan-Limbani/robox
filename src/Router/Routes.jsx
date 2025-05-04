import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ROUTES } from "../utils/constants.js";

const Home = lazy(() => import("../Pages/Home.jsx"));
const DailyRbxCounter = lazy(() => import("../Pages/DailyRBXCounter.jsx"));
const SpinWheel = lazy(() => import("../Pages/SpinWHeel.jsx"));
const ScratchCard = lazy(() => import("../Pages/ScratchCard.jsx"));
const HowToWin = lazy(() => import("../Pages/HowToWin.jsx"));
const Redeem = lazy(() => import("../Pages/Redeem.jsx"));
const BcRBXCounter = lazy(() => import("../Pages/BcRBXCounter.jsx"));
const Counter = lazy(() => import("../Pages/Counter.jsx"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={ROUTES.HOME} replace/>,
  },
  {
    path: ROUTES.HOME,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home/>
      </Suspense>
    ),
    index: true
  },
  {
    path: ROUTES.DAILY_RBX_COUNTER,
    element: (
      <Outlet/>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <DailyRbxCounter/>
          </Suspense>
        )
      },
      {
        path: ROUTES.BC_RBX_COUNTER,
        element: (
          <Outlet/>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <BcRBXCounter/>
              </Suspense>
            ),
          },
          {
            path: ROUTES.COUNT,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <Counter/>
              </Suspense>
            )
          }
        ]
      }
    ]
  },
  {
    path: ROUTES.SPIN_WHEEL,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SpinWheel/>
      </Suspense>
    )
  },
  {
    path: ROUTES.SCRATCH_CARD,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ScratchCard/>
      </Suspense>
    )
  },
  {
    path: ROUTES.LUCKY_SCRATCH,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ScratchCard/>
      </Suspense>
    )
  },
  {
    path: ROUTES.HOW_TO_WIN,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HowToWin/>
      </Suspense>
    )
  },
  {
    path: ROUTES.REDEEM,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Redeem/>
      </Suspense>
    )
  }
]);

export default routers;