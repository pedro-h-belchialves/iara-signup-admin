import { IChat } from './chat'

export interface IClient {
  id: string
  user_id: string
  name?: string
  session_id: string
  phone: string
  created_at: number
  attendance_stage: 'in_progress' | 'reschedule' | 'urgency' | 'schedule' | 'answered'
  first_attendance: boolean
  response_reactivation_date?: number
  last_response_message?: string
  chat: IChat
}
