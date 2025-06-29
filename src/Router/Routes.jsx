import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../utils/constants.js";
import About from "../Pages/About.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy.jsx";
import TermsOfService from "../Pages/TermsOfService.jsx";
import Contact from "../Pages/Contact.jsx";
import Layout from "../Components/Layout.jsx";
import QuizPage from "../Pages/QuizPage.jsx";
import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home.jsx"));
const DailyRbxCounter = lazy(() => import("../Pages/DailyRBXCounter.jsx"));
const SpinWheel = lazy(() => import("../Pages/SpinWheel.jsx"));
const ScratchCard = lazy(() => import("../Pages/ScratchCard.jsx"));
const HowToWin = lazy(() => import("../Pages/HowToWin.jsx"));
const Redeem = lazy(() => import("../Pages/Redeem.jsx"));
const BcRBXCounter = lazy(() => import("../Pages/BcRBXCounter.jsx"));
const Counter = lazy(() => import("../Pages/Counter.jsx"));

const router = createBrowserRouter([
  {
    element: <Layout><Outlet/></Layout>,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace/>
      },
      {
        path: ROUTES.HOME,
        element: (
          <Home/>
        )
      },
      {
        path: ROUTES.COUNT,
        element: (
          <Counter/>
        )
      },
      {
        path: ROUTES.DAILY_RBX_COUNTER,
        element: <Outlet/>,
        /*children: [
          {
            index: true,
            element: (
              <DailyRbxCounter/>
            )
          },
          {
            path: ROUTES.BC_RBX_COUNTER,
            element: <Outlet/>,
            children: [
              {
                index: true,
                element: (
                  <BcRBXCounter/>
                )
              },
              {
                path: ROUTES.COUNT,
                element: (
                  <Counter/>
                )
              }
            ]
          }
        ]*/
      },
      {
        path: ROUTES.SPIN_WHEEL,
        element: (
          <SpinWheel/>
        )
      },
      {
        path: ROUTES.SCRATCH_CARD,
        element: (
          <ScratchCard/>
        )
      },
      {
        path: ROUTES.LUCKY_SCRATCH,
        element: (
          <ScratchCard/>
        )
      },
      {
        path: ROUTES.HOW_TO_WIN,
        element: (
          <HowToWin/>
        )
      },
      {
        path: ROUTES.REDEEM,
        element: (
          <Redeem/>
        )
      },
      {
        path: ROUTES.ABOUT,
        element: <About/>
      },
      {
        path: ROUTES.PRIVACY_POLICY,
        element: <PrivacyPolicy/>
      },
      {
        path: ROUTES.TERM_SERVICE,
        element: <TermsOfService/>
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact/>
      },
      {
        path: ROUTES.QUIZ,
        element: (
            <QuizPage/>
        )
      }
    ]
  }
]);

export default router;