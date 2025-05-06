import { IUser } from "@/types/user";
import { ListHeader } from "./list-header";
import { UserItem } from "./user-item";

export const UserList = ({ users }: { users: IUser[] }) => {
  return (
    <div className="flex flex-col gap-6 ">
      <ListHeader />
      <div className="max-h-[70vh] overflow-scroll flex flex-col gap-4">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
