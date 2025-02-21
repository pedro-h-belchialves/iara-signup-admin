"use client";

import { createNewUserAction } from "@/actions/create-new-user";
import { useActionState, useEffect } from "react";

export const initialState = {
  success: false,
  errorMessage: "",
};

export const Form = () => {
  const [formState, formAction] = useActionState(
    createNewUserAction,
    initialState
  );

  useEffect(() => {
    if (formState.success) {
      alert("Usuário criado com sucesso");
    } else if (formState.errorMessage) {
      alert(formState.errorMessage);
    }
  }, [formState]);
  return (
    <form action={formAction} className="w-96 flex flex-col gap-4">
      <div className="flex flex-col">
        <input type="hidden" name="password" value="@Sucesso1@" />
        <input type="hidden" name="notify_webhook_url" value="any" />
        <label htmlFor="name">Nome do cliente</label>
        <input
          required
          name="name"
          className="text-black border shadow h-10 w-full rounded-xl"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email do cliente</label>
        <input
          required
          name="email"
          className="text-black border shadow h-10 w-full rounded-xl"
          type="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">número</label>
        <input
          required
          name="phone"
          className="text-black border shadow h-10 w-full rounded-xl"
          type="number"
        />
      </div>
      <button
        className="bg-blue-500 text-white h-10 w-full rounded-xl"
        type="submit"
      >
        Criar nova conta
      </button>
    </form>
  );
};
