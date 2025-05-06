"use server";

import { FetchApi } from "@/services/fetch";
import { IUser } from "@/types/user";

export const getUserAction = async (userId: string): Promise<Error | IUser> => {
  try {
    const response = await FetchApi<{ props: any }[]>({
      url: "/users",
      method: "GET",
      tags: ["user"],
    });

    if (response && response instanceof Error) {
      return new Error(response.message);
    }

    if (!response) return new Error("User not found!");

    const user = response.find((user) => user.props.id === userId);

    if (user) {
      // console.log(user.props.clinic_settings)
      return {
        ...user.props,
        clinic_operating_days: user.props.clinic_operating_days.map(
          (od: any) => od.props
        ),
        clinic_addresses: user.props.clinic_addresses.map(
          (address: any) => address.props
        ),
        clinic_professionals: user.props.clinic_professionals.map(
          (professional: any) => {
            return {
              ...professional.props,
              treatment_categories: professional.props.treatment_categories.map(
                (category: any) => category.props
              ),
            };
          }
        ),
        treatments: user.props.treatments.map(
          (treatment: any) => treatment.props
        ),
        clinic_settings: user.props.clinic_settings?.props || undefined,
        treatment_category_prices:
          user.props.treatment_category_prices?.map((price: any) => {
            return {
              ...price.props,
              treatment_category: price.props.treatment_category.props,
            };
          }) || undefined,
      };
    } else {
      return new Error("User not found");
    }
  } catch (error) {
    return new Error("User not found" + (error as Error).message);
  }
};
