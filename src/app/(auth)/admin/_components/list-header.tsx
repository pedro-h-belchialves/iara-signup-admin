export const ListHeader = () => {
  return (
    <div className=" gap-4 w-full bg-base-100 border border-base rounded-lg grid grid-cols-8 py-2 px-10 ">
      <span className="col-span-2 j">Nome</span>
      <span className="col-span-2">Email</span>
      <span className="col-span-2">Nome da Clínica</span>
      <span className="col-span-2">Está em treinamento</span>
    </div>
  );
};
