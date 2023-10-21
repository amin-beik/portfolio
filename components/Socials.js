import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <FaLinkedin />
      </Link>
    </div>
  );
};

export default Socials;
