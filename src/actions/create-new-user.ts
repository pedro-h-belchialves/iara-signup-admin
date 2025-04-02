"use server";

export const createNewUserAction = async (
  _prevState: any,
  formData: FormData
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append(
    "authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJjNDQ4MGUyMS04MjVkLTQ5NjctYjEzOS05OTE4M2IzZWRhN2QiLCJpYXQiOjE3NDM2MDM5MzEsImV4cCI6MTc0NjE5NTkzMX0.zYa0cJiYDfsY8I5Oedz089flYedrjlgFxYtAIAvbsOY"
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
