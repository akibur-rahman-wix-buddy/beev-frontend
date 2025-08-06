import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import logo from "@/assets/images/logo.png";

const Logo = ({ className = "", ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      className={cn("w-fit block cursor-pointer")}
      {...props}
    >
      <figure className={cn("w-fit block cursor-pointer", className)}>
        <img src={logo} alt="Logo" className="h-full" />
      </figure>
    </button>
  );
};

export default Logo;
