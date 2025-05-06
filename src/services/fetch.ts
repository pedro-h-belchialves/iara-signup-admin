import { getCookies } from "./get-coockeis";

interface FetchApiProps {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: Record<string, unknown>;
  tags?: string[];
  revalidate?: number;
}

export const FetchApi = async <T>({
  url,
  method,
  body,
  tags,
  revalidate,
}: FetchApiProps): Promise<T | Error | void> => {
  const token = await getCookies("access_token");

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("authorization", `Bearer ${token}`);

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method,
    headers: headers,
    body: JSON.stringify(body),
    next: {
      revalidate,
      tags,
    },
  });

  if (!response.ok) {
    if (response.status === 401) {
      return new Error("Unauthorized");
    }

    if (response.status === 404) {
      return new Error("Not found");
    }

    if (response.status === 500) {
      return new Error("Server error");
    }

    if (response.status === 400) {
      return new Error(
        `HTTP error! status: ${response.status}, message: ${response.statusText}`
      );
    }
  }

  if (response.status === 204) {
    return;
  }

  return await response.json();
};
