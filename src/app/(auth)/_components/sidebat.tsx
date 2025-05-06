import { LogoIcon } from "@/components/icons/logo";
import { NavLink } from "./nav-link";
import { UsersIcon } from "@/components/icons/users";
import { ArrowRightIcon } from "@/components/icons/arrow-right";
import { LogoutButton } from "./logout-button";

export const Sidebar = () => {
  return (
    <div className="col-span-1 bg-neutral-content border-r border-gray-300 flex flex-col  items-center justify-between py-10 px-4">
      <LogoIcon className="text-primary" />
      <div className="flex flex-col gap-2 w-full">
        <NavLink
          link="/admin"
          title="Usuários"
          icon={<UsersIcon className="h-5 w-5" />}
        />
        <NavLink
          link="/access"
          title="Acesso"
          icon={<ArrowRightIcon className="h-5 w-5" />}
        />
      </div>
      <div>
        {/* <h1>Name</h1> */}
        <LogoutButton />
      </div>
    </div>
  );
};
