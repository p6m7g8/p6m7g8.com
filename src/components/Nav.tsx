'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

/**
 * 
 */
interface NavProp {
  /**
   * 
   */
  name: string,
  /**
   * 
   */
  href: string,
}

const navigation: NavProp[] = [];

/**
 * 
 * @returns 
 */
const Nav = (): ReactElement => {
  const pathname = usePathname();

  return (
    <nav className="text-center" aria-label="TopBar" role="navigation">
      {navigation.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={pathname === item.href ?
            'bg-blue-300 text-gray-900 rounded-md text-center px-4' :
            'text-gray-600 hover:bg-blue-300 hover:text-gray-900 rounded-md px-4'}>
              {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;