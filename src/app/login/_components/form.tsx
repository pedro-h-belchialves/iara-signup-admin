import { Button } from "@/components/ux/button";
import { Input } from "@/components/ux/input";
import { PasswordInput } from "@/components/ux/password-input";

export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 text-xs" htmlFor="email">
          Seu email
        </label>
        <Input name="email" id="email" type="email" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-gray-700 text-xs" htmlFor="password">
          Sua senha
        </label>
        <PasswordInput name="password" id="password" type="password" />
      </div>
      <Button type="submit" className="mt-4 ">
        Entrar
      </Button>
    </form>
  );
};
