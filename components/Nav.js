import Link from "next/link";
import { BsList, BsX, BsLinkedin } from "react-icons/bs"; // Import the Bootstrap icons
import { useState } from "react";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="absolute z-30 w-full flex justify-around items-center py-4 ">
      {/* Name */}
      <Link href={"/"} className="mt-2">
        <h1 className="h2">
          Amin <span className="text-emerald-400 ">BEIK</span>
        </h1>
      </Link>
      {/* Nav bar +lg */}
      <div className="hidden lg:flex">
        <ul className="flex space-x-16">
          <li>
            <Link href="/skills">Compétences</Link>
          </li>
          <li>
            <Link href="/about">Education et Expériences</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/work">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* Nav bar -lg */}
      <div className="lg:hidden">
        <button onClick={toggleMobileMenu}>
          {showMobileMenu ? <BsX /> : <BsList />}
        </button>
        {showMobileMenu && (
          <ul className="mt-4 space-y-4 absolute left-24">
            <li>
              <Link href="/skills">Compétences</Link>
            </li>
            <li>
              <Link href="/about">A propos de moi</Link>
            </li>
            <li>
              <Link href="/work">Projets</Link>
            </li>
            <li>
              <span className="flex items-center">
                Likedin
                <Link
                  href={"https://www.linkedin.com/in/aminbeik/"}
                  className="hover:text-accent transition-all duration-300 ml-2"
                >
                  <BsLinkedin /> {/* Use the Bootstrap LinkedIn icon */}
                </Link>
              </span>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
      {/* LinkedIn icon +lg */}
      <Link
        href={"https://www.linkedin.com/in/aminbeik/"}
        className="hidden lg:flex hover:text-accent transition-all duration-300 text-lg"
      >
        <BsLinkedin /> {/* Use the Bootstrap LinkedIn icon */}
      </Link>
    </nav>
  );
};

export default Nav;
