import Link from "next/link";
import { FC } from "react";

type Props = {
  label: string;
  href: string;
  isActive: boolean;
};

export const NavItem: FC<Props> = ({ label, href, isActive }) => {
  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-gray-700 border-transparent"
      } hover:text-primary border-primary`}
    >
      {label}
    </Link>
  );
};
