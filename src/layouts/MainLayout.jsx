import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "./shared/navbars/Navbar";
import Footer from "./shared/footers/Footer";
import { cn } from "@/lib/utils";
// import "@/assets/css/styles.css";

const MainLayout = () => {
  const location = useLocation().pathname;

  return (
    <div className="font-inter text-textPrimary flex flex-col min-h-screen bg-[#F9F5F0]">
      <ScrollRestoration />
      <Navbar className="sticky top-0 z-50" onHomePage={location === "/"} />
      <main
        className={cn("flex-grow", {
          "-mt-[82px] sm:-mt-[92px] xl:-mt-[102px]": location === "/",
        })}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
