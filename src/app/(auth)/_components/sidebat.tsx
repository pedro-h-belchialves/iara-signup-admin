import { LogoIcon } from "@/components/icons/logo";
import { NavLink } from "./nav-link";
import { ChatBubbleIcon } from "@/components/icons/chat-bubble";

export const Sidebar = () => {
  return (
    <div className="col-span-1 bg-neutral-content border-r border-gray-300 flex flex-col  items-center justify-between py-10 px-4">
      <LogoIcon className="text-primary" />
      <div className="flex flex-col gap-2 w-full">
        <NavLink link="/admin" title="Admin" icon={<ChatBubbleIcon />} />
      </div>
      <div>
        {/* <h1>Name</h1> */}
        <button className="btn btn-primary">sair 🔙</button>
      </div>
    </div>
  );
};
