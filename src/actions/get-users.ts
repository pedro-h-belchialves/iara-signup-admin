"use server";

import { FetchApi } from "@/services/fetch";
import { IUser } from "@/types/user";

export const getAllUsersAction = async (): Promise<Error | IUser[]> => {
  try {
    const response = await FetchApi<{ props: any }[]>({
      url: "/users",
      method: "GET",
      tags: ["users"],
    });

    if (response && response instanceof Error) {
      return new Error(response.message);
    }

    if (!response) return new Error("Users not found");

    const users = response.map((user) => {
      return {
        ...user.props,
        clinic_operating_days: user.props.clinic_operating_days.map(
          (od: any) => od.props
        ),
        clinic_addresses: user.props.clinic_addresses.map(
          (address: any) => address.props
        ),
        clinic_professionals: user.props.clinic_professionals.map(
          (professional: any) => professional.props
        ),
        treatments: user.props.treatments.map(
          (treatment: any) => treatment.props
        ),
        clinic_settings: user.props.clinic_settings?.props || undefined,
      };
    });
    return users;
  } catch (error) {
    return new Error("Users not found" + (error as Error).message);
  }
};
