import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./shared/navbars/Navbar";
import Footer from "./shared/footers/Footer";
// import "@/assets/css/styles.css";

const MainLayout = () => {
  return (
    <div className="font-inter text-textPrimary flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navbar className="sticky top-0 z-50" />
      <main className="flex-grow -mt-[144px] bg-[#F9F5F0]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
