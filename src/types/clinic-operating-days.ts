import { WeekDays } from '@/enums/week-days'

export interface IClinicOperatingDays {
  id: string
  user_id: string
  day: WeekDays
  from: string
  to: string
}
