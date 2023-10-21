import Link from "next/link";
import Nav from "../components/Nav";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <h1 className="h2 mt-3">
              Amin <span className="text-emerald-400">BEIK</span>
            </h1>
          </Link>
          <Nav />
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
