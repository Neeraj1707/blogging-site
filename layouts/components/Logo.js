import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { logo, logo_width, logo_height, logo_text, title } = config.site;

  return (
    <Link href="/" className="navbar-brand block">
      <h1>BlogWisp</h1>
    </Link>
  );
};

export default Logo;
