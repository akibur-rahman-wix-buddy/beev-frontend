import Container from "@/components/shared/Container";
import bg from "@/assets/images/footer-bg.jpg";
import Logo from "@/components/shared/Logo";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const pages = [
    { name: "Return to Home", link: "/" },
    { name: "The Heart Wall", link: "/the-heart-wall" },
    { name: "One Heart Sanctuary", link: "/one-heart-sanctuary" },
    { name: "Join The Circle", link: "/join-the-circle" },
    { name: "Our Mission", link: "/our-mission" },
    { name: "FAQs", link: "/faqs" },
  ];

  const supportPages = [
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms & Conditions", link: "/terms-conditions" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <footer className="relative text-white">
      <div className="relative z-10">
        <Container
          as="section"
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 pt-8 md:pt-12 pb-12 md:pb-16"
        >
          <div className="w-full lg:max-w-[360px] xl:max-w-[460px]">
            <Logo className="h-16 md:h-20 lg:h-24 mb-6 md:mb-8 lg:mb-12" />
            <div className="space-y-4 lg:space-y-6">
              <h3 className="footer-title">Contact Info</h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                <Link
                  to="mailto:info@oneheartsociety.org"
                  className="flex gap-2 md:gap-3 items-center group"
                >
                  <IoMdMail className="size-6 md:size-8 flex-shrink-0" />
                  <span className="text-sm md:text-base break-all footer-links group-hover:scale-105 group-hover:underline">
                    info@oneheartsociety.org
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Links sections - stack on mobile, side by side on tablet+ */}
          <div className="flex-1 flex flex-wrap sm:grid sm:grid-cols-3 gap-6 lg:gap-10">
            <div className="space-y-4 lg:space-y-6 flex-1 min-w-[155px]">
              <h3 className="footer-title">Helpful Links</h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                {pages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.link}
                    className="footer-links text-sm md:text-base"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 flex-1 min-w-[155px]">
              <h3 className="footer-title">Support</h3>
              <div className="flex flex-col gap-3 lg:gap-4">
                {supportPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.link}
                    className="footer-links text-sm md:text-base"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 flex-1 min-w-[155px]">
              <h3 className="footer-title">Follow Us</h3>
              <div className="flex gap-3 md:gap-4">
                <Link to="#" className="hover:opacity-75 transition-opacity">
                  <FaFacebookSquare className="size-7 md:size-8 xl:size-9" />
                </Link>
                <Link to="#" className="hover:opacity-75 transition-opacity">
                  <FaInstagramSquare className="size-7 md:size-8 xl:size-9" />
                </Link>
                <Link to="#" className="hover:opacity-75 transition-opacity">
                  <FaSquareXTwitter className="size-7 md:size-8 xl:size-9" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div className="border-t border-[#AEE2D0]"></div>
        <Container
          as="section"
          className="flex justify-center items-center text-center py-3 sm:py-4 lg:py-5 px-4"
        >
          <p className="text-xs md:text-sm lg:text-base leading-relaxed">
            © 2025 One Heart Society. All rights reserved. Not a registered
            nonprofit.
          </p>
        </Container>
      </div>

      <figure className="absolute inset-0 overflow-hidden">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), rgba(112, 191, 164, 0.65)",
          }}
        ></div>
      </figure>
    </footer>
  );
};

export default Footer;
