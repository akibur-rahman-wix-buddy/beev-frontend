import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";
import { useState, useEffect, useContext } from "react";
import UserProfileDropdown from "@/components/shared/UserProfileDropdown";
import { Menu, X } from "lucide-react";
import { StateContext } from "@/context/StateContext";

const Navbar = ({ className, istrue = false, onHomePage = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to show UserProfileDropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSmall } = useContext(StateContext);

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

  // Close mobile menu when pressing escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(false);
  };

  // Method to handle login/logout (you can integrate this with your auth context)
  const handleAuthAction = () => {
    setIsLoggedIn(!isLoggedIn);
    closeMobileMenu();
  };

  useEffect(() => {
    if (isMobileMenuOpen && isSmall) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isSmall]);

  const pages = [
    { name: "Home", link: "/" },
    { name: "The Heart Wall", link: "/the-heart-wall" },
    { name: "One Heart Sanctuary", link: "/one-heart-sanctuary" },
    { name: "Join The Circle", link: "/join-the-circle" },
    { name: "Our Mission", link: "/our-mission" },
  ];

  return (
    <>
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
          <div className="flex-1 shrink-0">
            <Logo
              className={cn(
                "h-[50px] sm:h-[60px] xl:h-[70px] transition-all duration-300",
                {
                  "xl:h-[60px]": isScrolled,
                }
              )}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex gap-0.5 xl:gap-3 2xl:gap-6">
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

          {/* Desktop Auth Section */}
          <div className="hidden lg:flex flex-1 shrink-0 justify-end gap-2">
            {isLoggedIn ? (
              <UserProfileDropdown
                className={cn("", {
                  "text-white": onHomePage && !isScrolled,
                })}
                onLogout={handleAuthAction}
              />
            ) : (
              <>
                <Button
                  variant="ghost"
                  className={cn(
                    "hidden xl:inline-flex transition-colors duration-300 ease-in-out py-3.5 px-6 text-textPrimary hover:bg-primary hover:text-white",
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
                    "transition-colors duration-300 ease-in-out xl:py-3.5 xl:px-6 bg-primary text-white hover:bg-primary",
                    {
                      "bg-white text-accent-foreground hover:bg-primary hover:text-white":
                        onHomePage && !isScrolled,
                    }
                  )}
                  asChild
                >
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Right Section */}
          <div className="flex flex-1 justify-end lg:hidden items-center gap-2 sm:gap-2.5">
            {/* Mobile User Profile (when logged in) */}
            {isLoggedIn && (
              <UserProfileDropdown
                className={cn("", {
                  "text-white": onHomePage && !isScrolled,
                })}
                onLogout={handleAuthAction}
              />
            )}

            {/* Mobile Menu Button */}
            <div className="mobile-menu-container">
              <button
                type="button"
                className={cn("p-2 transition-colors duration-300 rounded-sm", {
                  "text-white bg-white/10": onHomePage && !isScrolled,
                  "text-textPrimary bg-[#F3EDE5]": !onHomePage || isScrolled,
                })}
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-60 lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen overflow-y-auto w-80 max-w-[85vw] bg-white shadow-xl z-70 transform transition-transform duration-500 ease-in-out lg:hidden mobile-menu-container",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6">
            <Logo className="h-12 sm:h-14" />
            <button
              className="p-2 text-textPrimary bg-[#F3EDE5] rounded-sm"
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <X className="size-5 sm:size-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 sm:pt-3 pb-6">
            <ul className="space-y-2">
              {pages.map((page, index) => (
                <li key={index}>
                  <NavLink
                    to={page.link}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      cn(
                        "block px-6 py-4 sm:text-[17px] font-medium transition-colors duration-200 border-l-4 border-transparent",
                        "hover:bg-gray-50 hover:text-primary hover:border-primary",
                        isActive
                          ? "text-primary bg-primary/10 border-primary"
                          : "text-textPrimary"
                      )
                    }
                  >
                    {page.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Auth Section (when not logged in) */}
          {!isLoggedIn && (
            <div className="p-6 space-y-3">
              <Button
                variant="outline"
                className="w-full py-3 text-textPrimary border-gray-300 hover:bg-gray-50"
                asChild
              >
                <Link to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              </Button>
              <Button
                className="w-full py-3 bg-primary text-white hover:bg-primary/90"
                asChild
              >
                <Link to="/register" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
