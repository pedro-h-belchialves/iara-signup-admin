"use server";

import { FetchApi } from "@/services/fetch";

export const createNewUserAction = async (
  _prevState: any,
  formData: FormData
) => {
  const entries = Object.fromEntries(formData.entries());

  const response = await FetchApi({
    url: "/users",
    method: "POST",
    body: entries,
  });

  if (response instanceof Error) {
    return {
      success: false,
      errorMessage: response.message,
    };
  }

  return {
    success: true,
  };
};
