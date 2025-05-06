"use server";

import { FetchApi } from "@/services/fetch";

export const generateSignupLinkAction = async () => {
  const response = await FetchApi<{ temporary_link: string }>({
    method: "POST",
    url: "/auth/temporary-link",
  });

  if (!response) {
    return {
      success: false,
      errorMessage: "Erro ao fazer login",
    };
  }

  if (response instanceof Error) {
    return {
      success: false,
      errorMessage: response.message,
    };
  }

  return {
    success: true,
    link: response?.temporary_link,
  };
};
