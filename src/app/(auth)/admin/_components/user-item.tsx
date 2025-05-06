export const UserItem = ({ user }: { user: any }) => {
  return (
    <div className=" gap-4 w-full bg-neutral-content border border-base rounded-lg grid grid-cols-8 py-4 px-10 ">
      <span className="col-span-2">{user.name}</span>
      <span className="col-span-2">{user.email}</span>
      <span className="col-span-2">
        {user.clinic_settings?.props.clinic_name}
      </span>
      <span className="col-span-2">
        {new Date(user.training_end_time).toLocaleString()}
      </span>
    </div>
  );
};
