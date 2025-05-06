import { UserList } from "./_components/user-list";
import { CreateUserModal } from "./_components/create-new-user-modal";
import { getAllUsersAction } from "@/actions/get-users";
import { GenrateLinkSignupButton } from "./_components/generate-link-signup-button";

const AdminPage = async () => {
  const users = await getAllUsersAction();

  if (users instanceof Error) {
    return (
      <div className="h-full w-full bg-white  flex flex-col gap-10">
        <div className="flex justify-between  ">
          <h1 className="text-2xl font-semibold w-fit  ">
            Controle de usuários
          </h1>
          <div className="flex gap-4 w-fit">
            <CreateUserModal />
            <GenrateLinkSignupButton />
          </div>
        </div>
        <p className="text-red-500">{users.message}</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-white  flex flex-col gap-10">
      <div className="flex justify-between  ">
        <h1 className="text-2xl font-semibold w-fit  ">Controle de usuários</h1>
        <div className="flex gap-4 w-fit">
          <CreateUserModal />
          <GenrateLinkSignupButton />
        </div>
      </div>

      <UserList users={users} />
    </div>
  );
};

export default AdminPage;
