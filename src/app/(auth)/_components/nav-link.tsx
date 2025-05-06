"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  link: string;
  icon?: React.ReactNode;
  title?: string;
}

export const NavLink = ({ link, icon, title }: NavLinkProps) => {
  const pathname = usePathname();

  const resolvedPath = `${link}`.replace(/\/+/g, "/");

  return (
    <Link
      href={resolvedPath}
      className={cn(
        "link link-hover  py-2 flex justify-center items-center gap-2 text-accent rounded-lg w-full",
        pathname === link ? "bg-primary/10 text-primary" : ""
      )}
    >
      {icon}
      {title || link}
    </Link>
  );
};
