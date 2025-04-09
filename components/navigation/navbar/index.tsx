import Image from "next/image";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav
      className="flex-between background-light900_dark200 fixed
        z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 "
    >
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="EasyDevFlow Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p
          className="h2-bold font-space-grotesk
             dark:text-light-1000 max-sm:hidden"
        >
          Easy <span className="text-orange-500"> DevFlow </span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex items-center gap-5">
        <Theme />
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
