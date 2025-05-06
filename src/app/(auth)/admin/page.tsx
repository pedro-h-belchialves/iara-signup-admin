import { UserList } from "./_components/user-list";
import { CreateUserModal } from "./_components/create-new-user-modal";
import { Button } from "@/components/ux/button";
import { LinkIcon } from "@/components/icons/link";
import { getAllUsersAction } from "@/actions/get-users";

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
            <Button className="w-fit px-10 bg-success">
              <LinkIcon className="h-5 w-5" />
              Gerar link de signup
            </Button>
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
          <Button className="w-fit px-10 bg-success">
            <LinkIcon className="h-5 w-5" />
            Gerar link de signup
          </Button>
        </div>
      </div>

      <UserList users={users} />
    </div>
  );
};

export default AdminPage;
