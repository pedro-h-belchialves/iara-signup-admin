"use client";

import { Button } from "@/components/ux/button";
import { Input } from "@/components/ux/input";
import { useEffect, useState } from "react";

// const initialState = {
//   success: false,
//   errorMessage: "",
//   errors: {
//     email: "",
//   },
// };

const CreateUserModal = () => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  //   const [fromState, fromAction] = useActionState(
  //     startRecoveryPasswordTokenAction,
  //     initialState
  //   );

  // useEffect(() => {
  //   if (fromState?.errorMessage) {
  //     setErrorMessage(fromState.errorMessage);
  //   }
  //   if (fromState?.errors?.email) {
  //     setErrorMessage(fromState.errors.email);
  //   }
  //   if (fromState?.success) {
  //     setSuccess(true);
  //     setTimeout(() => {
  //       setOpen(false);
  //       setSuccess(false);
  //     }, 5000);
  //   }
  // }, [fromState])

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
      }, 5000);
    }
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  });

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className=" w-fit px-10 whitespace-nowrap"
      >
        + Novo usuario
      </Button>
      <div
        className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm ${
          open ? "visible" : "hidden"
        }`}
      >
        <div
          id="forgot-password-modal"
          className="p-10 relative rounded-xl w-full max-w-[450px] flex flex-col items-center justify-center gap-10 bg-neutral"
        >
          <button
            className="btn-sm absolute right-2 top-2"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <h3 className="text-2xl font-bold">Criar novo usuário</h3>
          </div>
          {!success ? (
            <>
              <form
                // action={fromAction}
                className="flex w-full flex-col items-center gap-5"
              >
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="name">Nome do usuário</label>
                  <Input
                    autoComplete="name"
                    name="name"
                    className={`w-full ${errorMessage ? "input-error" : ""}`}
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="name">Email do usuário</label>
                  <Input
                    autoComplete="name"
                    name="name"
                    className={`w-full ${errorMessage ? "input-error" : ""}`}
                  />
                </div>
                <div className="flex w-full flex-col gap-1">
                  <label htmlFor="name">Telefone do usuário</label>
                  <Input
                    autoComplete="name"
                    name="name"
                    className={`w-full ${errorMessage ? "input-error" : ""}`}
                  />
                </div>

                {errorMessage && (
                  <div className="flex w-full flex-col justify-center gap-2">
                    <span className="text-sm text-error">{errorMessage}</span>
                  </div>
                )}
                <div className="grid w-full grid-cols-2 justify-center gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-4 w-full rounded-xl bg-base-100 font-medium text-accent-content transition-all duration-300 ease-in-out hover:scale-[1.009] hover:bg-base-100"
                  >
                    Cancelar
                  </button>
                  <Button type="submit" className="mt-4 w-full font-medium">
                    Enviar
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <h1 className="text-lg font-bold text-success">
                Email enviado com sucesso!
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { CreateUserModal };
