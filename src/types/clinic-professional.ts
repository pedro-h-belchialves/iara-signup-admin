import { ITreatmentCategory } from "./treatment-category"

export interface IClinicProfessional {
  id: string
  user_id: string
  name: string
  cro?: string
  treatment_categories: ITreatmentCategory[]
  rating_price?: number
}
