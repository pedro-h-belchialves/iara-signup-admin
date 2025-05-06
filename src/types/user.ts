import { ITreatment } from "./treatment";
import { IClinicAddress } from "./clinic-address";
import { IClinicSettings } from "./clinic-settings";
import { IClinicProfessional } from "./clinic-professional";
import { IClinicOperatingDays } from "./clinic-operating-days";
import { ITreatmentCategoryPrice } from "./treatment-category-price";

export interface IUser {
  id: string;
  wpp_id: string;
  name: string;
  email: string;
  password: string;
  notify_webhook_url: string;
  training_end_time: number;
  created_at: number;
  setup_compleated: boolean;
  phone: string;
  clinic_settings: IClinicSettings;
  clinic_addresses: IClinicAddress[];
  clinic_operating_days: IClinicOperatingDays[];
  clinic_professionals: IClinicProfessional[];
  treatments: ITreatment[];
  treatment_category_prices: ITreatmentCategoryPrice[];
}
