import { ClinicArea } from "@/enums/clinic-area"
import { ITreatment } from "./treatment"

export interface ITreatmentCategory {
  id: string
  name: string
  clinic_area: ClinicArea
  treatments: ITreatment[]
}
