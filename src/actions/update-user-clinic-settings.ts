"use server";

import { FetchApi } from "@/services/fetch";
import { revalidateTag } from "next/cache";

export const updateClinicSettingsAction = async (
  _prevState: any,
  formData: FormData
) => {
  const updateClinicSettingsData = Object.fromEntries(formData.entries());

  //   const formValidationResult = updateClinicSettingsSchema.safeParse(
  //     updateClinicSettingsData
  //   );

  //   if (!formValidationResult.success) {
  //     const formErrors = formValidationResult.error.flatten().fieldErrors;

  //     return {
  //       success: false,
  //       errors: {
  //         clinic_name: formErrors.clinic_name?.join("\n"),
  //         clinic_area: formErrors.clinic_area?.join("\n"),
  //         payment_methods: formErrors.payment_methods?.join("\n"),
  //         initial_rating_price: formErrors.initial_rating_price?.join("\n"),
  //         starting_price: formErrors.starting_price?.join("\n"),
  //         accept_health_insurance: formErrors.accept_health_insurance?.join("\n"),
  //         notes: formErrors.notes?.join("\n"),
  //         custom_name: formErrors.custom_name?.join("\n"),
  //       },
  //       errorMessage: "",
  //     };
  //   }

  const userId = formData.get("user_id");

  const { initial_rating_price, starting_price, accept_health_insurance } =
    updateClinicSettingsData;
  const updateClinicSettingsResult = await FetchApi({
    method: "PATCH",
    url: `/users/${userId}`,
    body: {
      clinic_settings: {
        ...updateClinicSettingsData,
        accept_health_insurance: accept_health_insurance ? true : false,
        initial_rating_price: formatCurrencyToNumber(initial_rating_price),
        starting_price: formatCurrencyToNumber(starting_price),
      },
    },
  });

  if (updateClinicSettingsResult instanceof Error) {
    return {
      success: false,
      errorMessage: updateClinicSettingsResult.message,
    };
  }

  revalidateTag("user");

  return {
    success: true,
    errorMessage: "",
  };
};

function formatCurrencyToNumber(str: any): number {
  return Number(str.replace(/\D/g, ""));
}

export { formatCurrencyToNumber };
