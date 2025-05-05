"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: string;
  icon?: React.ReactNode;
  title?: string;
}

export const NavLink = ({ link, icon, title }: NavLinkProps) => {
  const pathname = usePathname();

  // Constrói o caminho absoluto combinando o caminho atual com o link relativo
  const resolvedPath = `${pathname}/${link}`.replace(/\/+/g, "/");

  return (
    <Link
      href={resolvedPath}
      className="link link-hover bg-primary/10 py-2 flex justify-center items-center gap-2 text-primary rounded-lg w-full "
    >
      {icon}
      {title || link}
    </Link>
  );
};
