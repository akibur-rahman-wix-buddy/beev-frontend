import Container from "@/components/shared/Container";
import bg from "@/assets/images/footer-bg.jpg";
import Logo from "@/components/shared/Logo";
import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const pages = [
    { name: "Return to Home", link: "/" },
    { name: "The Heart Wall", link: "/about" },
    { name: "One Heart Sanctuary", link: "/services" },
    { name: "Our Mission", link: "/contact" },
    { name: "Join The Circle", link: "/contact" },
    { name: "FAQs", link: "/contact" },
  ];

  const supportPages = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms & Conditions", link: "/terms-of-service" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <footer
      className="relative text-white"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), rgba(112, 191, 164, 0.65)",
      }}
    >
      <div className="">
        <Container as="section" className="flex gap-10 pt-12 pb-16">
          <div className="w-full max-w-[400px]">
            <Logo className="h-24 mb-12" />
            <div className="space-y-6">
              <h3 className="footer-title">Contact Info</h3>
              <div className="flex flex-col gap-4">
                <Link
                  to="mailto:info@oneheartsociety.org"
                  className="flex gap-3 items-center footer-links"
                >
                  <IoMdMail className="size-8" />
                  info@oneheartsociety.org
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <h3 className="footer-title">Helpful Links</h3>
            <div className="flex flex-col gap-4">
              {pages.map((page, index) => (
                <Link key={index} to={page.link} className="footer-links">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <h3 className="footer-title">Support</h3>
            <div className="flex flex-col gap-4">
              {supportPages.map((page, index) => (
                <Link key={index} to={page.link} className="footer-links">
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6 flex-1">
            <h3 className="footer-title">Follow Us</h3>
            <div className="flex gap-4">
              <Link to="#">
                <FaFacebook className="size-8" />
              </Link>
              <Link to="#">
                <FaInstagramSquare className="size-8" />
              </Link>
              <Link to="#">
                <FaTwitterSquare className="size-8" />
              </Link>
            </div>
          </div>
        </Container>
        <div className="border-t border-[#AEE2D0]"></div>
        <Container
          as="section"
          className="flex justify-center items-center text-center py-5"
        >
          <p className="text-sm md:text-base">
            © 2025 One Heart Society. All rights reserved. Not a registered
            nonprofit.
          </p>
        </Container>
      </div>

      <figure className="absolute inset-0 overflow-hidden -z-10">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </figure>
    </footer>
  );
};

export default Footer;
