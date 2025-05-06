import { ITreatmentCategory } from './treatment-category'

export interface ITreatmentCategoryPrice {
  id: string
  user_id: string
  starting_price: number
  treatment_category: ITreatmentCategory
}
