"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "./nav-item";

const navItemData = [
  {
    id: "1",
    label: "Home",
    href: "/",
  },
  {
    id: "2",
    label: "My Project",
    href: "/projects",
  },
  {
    id: "3",
    label: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-4 py-2 ">
      <p className="bg-primary p-2 rounded-md text-2xl text-white italic">MS</p>
      <ul className="flex gap-4">
        {navItemData.map(({ id, label, href }) => {
          return (
            <li key={id}>
              <NavItem label={label} href={href} isActive={pathname === href} />
            </li>
          );
        })}
      </ul>
    </header>
  );
};
