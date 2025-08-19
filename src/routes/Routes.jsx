import { createBrowserRouter } from "react-router";
import ErrorPage from "@/pages/Error/ErrorPage";
import NotFoundError from "@/pages/Error/NotFoundError";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
// import TheHeartWallPage from "@/pages/public/TheHeartWallPage";
import HaveANeedPage from "@/pages/public/HaveANeedPage";
import JoinTheCirclePage from "@/pages/public/JoinTheCirclePage";
import OurMissionPage from "@/pages/public/OurMissionPage";
import PrivacyPolicyPage from "@/pages/public/PrivacyPolicyPage";
import TermsConditionsPage from "@/pages/public/TermsConditionsPage";
import OneHeartSanctuaryPage from "@/pages/public/OneHeartSanctuaryPage";
import WantToHelp from "@/pages/public/WantToHelp";
import ImpactOfYourSupportPage from "@/pages/public/ImpactOfYourSupportPage";
import FaqsPage from "@/pages/public/FaqsPage";
import ContactUsPage from "@/pages/public/ContactUsPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/auth/ResetPasswordPage";
import VerifyOtpPage from "@/pages/auth/VerifyOtpPage";
import AddPostPage from "@/pages/public/AddPostPage";
import ProfilePage from "@/pages/private/ProfilePage";
import MyActivityPage from "@/pages/private/MyActivityPage";
import SettingsPage from "@/pages/private/SettingsPage";
import ChangePasswordPage from "@/pages/private/ChangePasswordPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/the-heart-wall",
      //   element: <TheHeartWallPage />,
      // },
      {
        path: "/have-a-need",
        element: <HaveANeedPage />,
      },
      {
        path: "/want-to-help",
        element: <WantToHelp />,
      },
      {
        path: "/impact-of-your-support",
        element: <ImpactOfYourSupportPage />,
      },
      {
        path: "/join-the-circle",
        element: <JoinTheCirclePage />,
      },
      {
        path: "/our-mission",
        element: <OurMissionPage />,
      },
      {
        path: "/one-heart-sanctuary",
        element: <OneHeartSanctuaryPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditionsPage />,
      },
      {
        path: "/add-post",
        element: <AddPostPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/faqs",
        element: <FaqsPage />,
      },
      {
        path: "/profile",
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: "my-activity",
            element: <MyActivityPage />,
          },
          {
            path: "settings",
            element: <SettingsPage />,
          },
          {
            path: "change-password",
            element: <ChangePasswordPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtpPage />,
  },
  {
    path: "*",
    element: <NotFoundError />,
  },
]);
