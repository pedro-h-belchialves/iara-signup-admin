import { IUser } from "@/types/user";

export const UserItem = ({ user }: { user: IUser }) => {
  return (
    <a
      href={`/user/${user.id}`}
      className=" gap-4 w-full bg-neutral-content text-sm  border border-base rounded-lg grid grid-cols-8  py-2  px-10 "
    >
      <span className="col-span-2 h-10 flex items-center">{user.name}</span>
      <span className="col-span-2  h-10 flex items-center">{user.email}</span>
      <span className="col-span-2  h-10 flex items-center">
        {user.clinic_settings?.clinic_name}
      </span>
      <div className="col-span-2  flex-row gap-2  h-10 flex items-center">
        <span className="text-sm">
          {user.training_end_time > Date.now() ? "Em Treinamento " : "Ativo"}
        </span>
        {user.training_end_time > Date.now() && (
          <span className="text-xs text-accent-content">
            até: {new Date(user.training_end_time).toLocaleDateString()}
          </span>
        )}
      </div>
    </a>
  );
};
