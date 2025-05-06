"use server";

import { loginSchema } from "@/schemas/login";
import { FetchApi } from "@/services/fetch";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export const loginAction = async (_prevState: any, formData: FormData) => {
  const loginData = Object.fromEntries(formData.entries());
  const formValidationResult = loginSchema.safeParse(loginData);

  if (!formValidationResult.success) {
    const formErrors = formValidationResult.error.flatten().fieldErrors;

    return {
      success: false,
      errors: {
        email: formErrors.email?.join("\n"),
        password: formErrors.password?.join("\n"),
      },
      errorMessage: "",
    };
  }

  const response = await FetchApi<{ access_token: string }>({
    method: "POST",
    url: "/auth",
    body: loginData,
  });

  if (!response) {
    return {
      success: false,
      errorMessage: "Erro ao fazer login",
    };
  }

  if (response instanceof Error) {
    if (response.message.includes("400")) {
      return {
        success: false,
        errorMessage: "Usuário ou senha inválidos",
      };
    }
    return {
      success: false,
      errorMessage: response.message,
    };
  }

  const cookiesStore = await cookies();

  cookiesStore.set({
    name: "access_token",
    value: response.access_token,
    path: "/",
  });

  permanentRedirect("/admin");
};
