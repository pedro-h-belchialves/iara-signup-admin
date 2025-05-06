"use server";

import { cookies } from "next/headers";

export const getCookies = async (cookeisName: string) => {
  const nextCookies = await cookies();
  const result = nextCookies.get(cookeisName);

  return result?.value;
};
