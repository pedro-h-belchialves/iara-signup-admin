import { getUserAction } from "@/actions/get-user";
import { GeneralInformationsForm } from "./_components/general-informations-form";

interface UserProps {
  user_id: string;
}

const UserPage = async ({ params }: { params: Promise<UserProps> }) => {
  const { user_id } = await params;

  const user = await getUserAction(user_id);

  if (user instanceof Error) {
    return (
      <div>
        <h1>{user.message}</h1>
      </div>
    );
  }

  return (
    <div className="h-full w-full   flex flex-col gap-10">
      <h1 className="text-2xl font-semibold w-fit ">{user.name}</h1>
      <div>
        <GeneralInformationsForm
          clinicSettings={user.clinic_settings}
          userId={user_id}
        />
      </div>
    </div>
  );
};

export default UserPage;
