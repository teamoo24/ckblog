import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import headerNavLinks from "@/data/headerVavLinks";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 dark:bg-gray-700 flex justify-between items-center">
      <Link href={"/"}>
        <h1 className="text-xl">CK Blog</h1>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== "/")
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <MobileNav />
      </div>
      <div className="hidden sm:block">
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
