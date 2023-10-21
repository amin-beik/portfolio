import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul className="flex space-x-16">
        <li>
          <Link href="/about">A propos de moi</Link>
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
    </nav>
  );
};

export default Nav;
