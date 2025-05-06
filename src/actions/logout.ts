"use server";

import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";

export const logoutAction = async () => {
  const cookiesStore = await cookies();

  cookiesStore.delete("access_token");
  cookiesStore.delete("connectionId");
  permanentRedirect("/login");
};
