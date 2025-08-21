import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
import UserProfileDropdown from "@/components/shared/UserProfileDropdown";

const Navbar = ({ className, istrue = false, onHomePage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (istrue) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [istrue]);

  const pages = [
    { name: "Home", link: "/" },
    { name: "The Heart Wall", link: "/the-heart-wall" },
    { name: "One Heart Sanctuary", link: "/one-heart-sanctuary" },
    { name: "Join The Circle", link: "/join-the-circle" },
    { name: "Our Mission", link: "/our-mission" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
        className
      )}
    >
      <Container
        as="nav"
        className={cn(
          "py-4 flex justify-between items-center transition-all duration-300",
          {
            "": isScrolled,
          }
        )}
      >
        <div className="flex-1">
          <Logo
            className={cn("h-[70px] transition-all duration-300", {
              "h-[60px]": isScrolled,
            })}
          />
        </div>

        <div className="grow flex justify-center">
          <ul className="flex space-x-6">
            {pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  to={page.link}
                  className={({ isActive }) =>
                    cn(
                      "relative font-medium transition-all duration-300 ease-in-out text-textPrimary after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-500 hover:after:w-full px-3",
                      {
                        "text-white": onHomePage && !isScrolled,
                        "text-primary": isActive,
                      }
                    )
                  }
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 flex justify-end gap-2">
          {/* <>
            <Button
              variant="ghost"
              className={cn(
                "transition-colors duration-300 ease-in-out py-3.5 px-6 text-textPrimary hover:bg-primary hover:text-white",
                {
                  "text-white hover:bg-primary hover:text-white":
                    onHomePage && !isScrolled,
                }
              )}
              asChild
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button
              className={cn(
                "transition-colors duration-300 ease-in-out py-3.5 px-6 bg-primary text-white hover:bg-primary",
                {
                  "bg-white text-accent-foreground hover:bg-primary hover:text-white":
                    onHomePage && !isScrolled,
                }
              )}
              asChild
            >
              <Link to="/register">Sign Up</Link>
            </Button>
          </> */}
          <UserProfileDropdown
            className={cn("", {
              "text-white": onHomePage && !isScrolled,
            })}
          />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
