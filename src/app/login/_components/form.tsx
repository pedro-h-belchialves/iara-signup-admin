"use client";

import { loginAction } from "@/actions/login";
import { Button } from "@/components/ux/button";
import { Input } from "@/components/ux/input";
import { PasswordInput } from "@/components/ux/password-input";
import { useActionState, useEffect, useState } from "react";

const initialState = {
  success: false,
  errorMessage: "",
};
export const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [formState, formAction] = useActionState(loginAction, initialState);

  useEffect(() => {
    if (formState.success) {
      setMessage("Usuário criado com sucesso!");
    } else if (formState.errorMessage) {
      setMessage(formState.errorMessage);
    }
  }, [formState]);
  return (
    <form action={formAction} className="flex flex-col gap-4 w-full">
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
      {message && <p className="text-red-500">{message}</p>}
      <Button type="submit" className="mt-4 ">
        Entrar
      </Button>
    </form>
  );
};
