import { IMessage } from "./message"

export interface IChat {
  id: string
  client_id: string
  name: string
  created_at: number
  messages: IMessage[]
}
