import { ClinicArea } from "@/enums/clinic-area"

export interface IClinicSettings {
  id: string
  user_id: string
  clinic_name: string
  payment_methods: string
  initial_rating_price: number
  starting_price: number
  custom_name?: string
  accept_health_insurance: boolean
  notes?: string
  clinic_area: ClinicArea
}
