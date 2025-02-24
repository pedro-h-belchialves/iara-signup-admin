"use server";

export const createNewUserAction = async (
  _prevState: any,
  formData: FormData
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append(
    "authorization",
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJiYTBhOTg1OS05NzA5LTRjNDQtOWRkYS1lMGJlMzhlYjhhYzQiLCJpYXQiOjE3NDA0MzU2NDYsImV4cCI6MTc0MzAyNzY0Nn0.nSoBjkOUDZziGKRH37fU-8PrEG0ZVTCxh71sd0wqScY"
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
