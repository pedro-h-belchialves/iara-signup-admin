import { Button } from "@/components/ux/button";
import { LinkIcon } from "@/components/icons/link";

const AccessPage = () => {
  return (
    <div className="h-full w-full bg-white  flex flex-col gap-10">
      <div className="flex justify-between  ">
        <h1 className="text-2xl font-semibold w-fit  ">Controle de acesso</h1>
        <div className="flex gap-4 w-fit">
          <Button className="w-fit px-10 bg-success">
            <LinkIcon className="h-5 w-5" />
            Gerar link de acesso
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessPage;
