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
      className={`pb-1 px-1 hover:text-primary border-b-2 border-transparent hover:border-primary ${
        isActive
          ? "text-primary !border-primary"
          : "text-gray-700 border-transparent"
      }`}
    >
      {label}
    </Link>
  );
};
