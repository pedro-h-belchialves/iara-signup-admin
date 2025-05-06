import { ListHeader } from "./list-header";
import { UserItem } from "./user-item";

export const UserList = ({ users }: { users: any[] }) => {
  return (
    <div className="flex flex-col gap-4">
      <ListHeader />
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
