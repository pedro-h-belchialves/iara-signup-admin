"use server";

export const createNewUserAction = async (
  _prevState: any,
  formData: FormData
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append(
    "authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJiYTBhOTg1OS05NzA5LTRjNDQtOWRkYS1lMGJlMzhlYjhhYzQiLCJpYXQiOjE3MzkyNzkzMTAsImV4cCI6MTc0MTg3MTMxMH0.v5g5cMgma62GeLRI9bPmWUbTVxdo_cQ7KaDq-gLyq_k"
  );

  const entries = Object.fromEntries(formData.entries());
  console.log(formData);

  const response = await fetch("https://iara-api.odonto5v.com.br/users", {
    method: "POST",
    body: JSON.stringify(entries),
    headers: headers,
  });

  if (!response.ok) {
    return {
      success: false,
      errorMessage:
        "Algo deu errado ao criar o usuário: " +
        response.status +
        " " +
        response.statusText,
    };
  }

  return {
    success: true,
  };
};
