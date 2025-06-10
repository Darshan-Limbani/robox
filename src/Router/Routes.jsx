import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ROUTES } from "../utils/constants.js";
import About from "../Pages/About.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy.jsx";
import TermsOfService from "../Pages/TermsOfService.jsx";
import Contact from "../Pages/Contact.jsx";
import Layout from "../Components/Layout.jsx";
import QuizPage from "../Pages/QuizPage.jsx";

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
    element: <Layout><Outlet /></Layout>,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.HOME} replace />
      },
      {
        path: ROUTES.HOME,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: ROUTES.DAILY_RBX_COUNTER,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <DailyRbxCounter />
              </Suspense>
            )
          },
          {
            path: ROUTES.BC_RBX_COUNTER,
            element: <Outlet />,
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <BcRBXCounter />
                  </Suspense>
                )
              },
              {
                path: ROUTES.COUNT,
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <Counter />
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
            <SpinWheel />
          </Suspense>
        )
      },
      {
        path: ROUTES.SCRATCH_CARD,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ScratchCard />
          </Suspense>
        )
      },
      {
        path: ROUTES.LUCKY_SCRATCH,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ScratchCard />
          </Suspense>
        )
      },
      {
        path: ROUTES.HOW_TO_WIN,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HowToWin />
          </Suspense>
        )
      },
      {
        path: ROUTES.REDEEM,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Redeem />
          </Suspense>
        )
      },
      {
        path: ROUTES.ABOUT,
        element: <About />
      },
      {
        path: ROUTES.PRIVACY_POLICY,
        element: <PrivacyPolicy />
      },
      {
        path: ROUTES.TERM_SERVICE,
        element: <TermsOfService />
      },
      {
        path: ROUTES.CONTACT,
        element: <Contact />
      },
      {
        path: ROUTES.QUIZ,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <QuizPage/>
          </Suspense>
        )
      }
    ]
  }
]);

export default router;