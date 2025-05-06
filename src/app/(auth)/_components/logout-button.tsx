"use client";
import { logoutAction } from "@/actions/logout";
import { ArrowRightIcon } from "@/components/icons/arrow-right";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await logoutAction();
  };
  return (
    <button
      onClick={() => handleLogout()}
      className="btn btn-primary flex justify-center items-center gap-2"
    >
      sair <ArrowRightIcon className="h-5 w-5" />
    </button>
  );
};
