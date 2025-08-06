import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";

const Navbar = ({ className, istrue = false }) => {
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
    { name: "The Heart Wall", link: "/about" },
    { name: "One Heart Sanctuary", link: "/services" },
    { name: "Join The Circle", link: "/contact" },
    { name: "Our Mission", link: "/contact" },
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
            className={cn("h-20 transition-all duration-300", {
              "h-[60px]": isScrolled,
            })}
          />
        </div>

        <div className="grow flex justify-center">
          <ul className="flex space-x-12">
            {pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  to={page.link}
                  className={({ isActive }) =>
                    cn(
                      "font-medium transition-colors",
                      isScrolled ? "text-textPrimary" : "text-white",
                      {
                        [isScrolled ? "text-primary" : "text-primary"]:
                          isActive,
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

        {/* Buttons */}
        <div className="flex-1 flex gap-2">
          <Button
            variant="ghost"
            className={cn(
              "transition-colors py-3.5 px-6",
              isScrolled
                ? "text-textPrimary hover:bg-primary hover:text-white"
                : "text-white hover:bg-primary hover:text-white"
            )}
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            className={cn(
              "transition-colors py-3.5 px-6",
              isScrolled
                ? "bg-primary text-white hover:bg-primary"
                : "bg-white text-accent-foreground hover:bg-primary hover:text-white"
            )}
            asChild
          >
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
