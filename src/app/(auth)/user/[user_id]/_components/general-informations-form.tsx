"use client";

import { updateClinicSettingsAction } from "@/actions/update-user-clinic-settings";
import { Button } from "@/components/ux/button";
import { Checkbox } from "@/components/ux/checkbox";
import { CurrencyInput } from "@/components/ux/currency-input";
import { Input } from "@/components/ux/input";
import { Textarea } from "@/components/ux/textarea";
import { IClinicSettings } from "@/types/clinic-settings";
import { formatCurrency } from "@/utils/format-currency";
import { useActionState, useEffect } from "react";

interface GeneralInformationsFormProps {
  clinicSettings: IClinicSettings | undefined;
  userId: string;
}

const updateClinicSettingsActionInitialState = {
  success: false,
  errors: {
    clinic_area: "",
    clinic_name: "",
    payment_methods: "",
    initial_rating_price: "",
    starting_price: "",
    accept_health_insurance: "",
    notes: "",
    custom_name: "",
  },
  errorMessage: "",
};

const GeneralInformationsForm = (props: GeneralInformationsFormProps) => {
  const { clinicSettings, userId } = props;
  const [formState, formAction] = useActionState(
    updateClinicSettingsAction,
    updateClinicSettingsActionInitialState
  );

  useEffect(() => {
    if (formState.success) {
      window.location.reload();
    }
  }, [formState]);

  return (
    <form
      action={formAction}
      className="flex h-fit w-full flex-col gap-10 xl:w-[80%] xl:gap-9 2xl:w-[60%]"
    >
      <input type="hidden" name="user_id" value={userId} />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex h-fit w-full flex-col gap-3">
          <label>Qual o nome da sua clínica? *</label>
          <Input
            name="clinic_name"
            defaultValue={clinicSettings?.clinic_name || ""}
          />
          {/* {formState.errors && formState.errors.clinic_name && (
            <InputErrorMessage>
              {formState.errors.clinic_name}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="flex h-fit w-full flex-col gap-3">
          <label className="flex w-fit flex-row items-center justify-center">
            Qual o nome personalizado?{" "}
            <div
              className="tooltip tooltip-info hidden text-white md:flex"
              data-tip="Caso seja passado a IAra passará a atender com este nome"
            >
              {/* <CircleHelpIcon className="h-4 w-4 rounded-full bg-accent-content text-white" /> */}
            </div>
          </label>
          <Input
            name="custom_name"
            defaultValue={clinicSettings?.custom_name || ""}
          />
          {/* {formState.errors && formState.errors.custom_name && (
            <InputErrorMessage>
              {formState.errors.custom_name}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="flex h-fit w-full flex-col gap-3">
          <label>Quais são os métodos de pagamento aceitos? *</label>
          <Input
            name="payment_methods"
            defaultValue={clinicSettings?.payment_methods || ""}
          />
          {/* {formState.errors && formState.errors.payment_methods && (
            <InputErrorMessage>
              {formState.errors.payment_methods}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="flex h-fit w-full flex-col gap-3">
          <label>Qual é o preço da avaliação inicial da clínica?</label>
          <CurrencyInput
            name="initial_rating_price"
            defaultValue={formatCurrency(
              `${clinicSettings?.initial_rating_price || ""}`
            )}
          />
          {/* {formState.errors && formState.errors.initial_rating_price && (
            <InputErrorMessage>
              {formState.errors.initial_rating_price}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="flex h-fit w-full flex-col gap-3">
          <label>Qual é o preço base dos serviços da clínica?</label>
          <CurrencyInput
            name="starting_price"
            defaultValue={formatCurrency(
              `${clinicSettings?.starting_price || ""}`
            )}
          />
          {/* {formState.errors && formState.errors.starting_price && (
            <InputErrorMessage>
              {formState.errors.starting_price}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="flex h-fit w-full flex-col gap-3">
          <label>Qual é a sua área de atuação?</label>
          <div className="flex h-fit w-fit items-center gap-3">
            <input
              type="radio"
              name="clinic_area"
              value="aesthetics"
              className="radio-primary radio-xs"
              defaultChecked={clinicSettings?.clinic_area === "aesthetics"}
            />
            <span className="text-xs text-accent-content">Estética</span>
            <input
              type="radio"
              name="clinic_area"
              value="dentistry"
              className="radio-primary radio-xs"
              defaultChecked={clinicSettings?.clinic_area === "dentistry"}
            />
            <span className="text-xs text-accent-content">Dentística</span>
            <input
              type="radio"
              name="clinic_area"
              value="both"
              className="radio-primary radio-xs"
              defaultChecked={clinicSettings?.clinic_area === "both"}
            />
            <span className="text-xs text-accent-content">Ambos</span>
          </div>
          {/* {formState.errors && formState.errors.clinic_area && (
            <InputErrorMessage>
              {formState.errors.clinic_area}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="flex h-fit w-full flex-col gap-3">
          <label>Sua clínica atende convênios?</label>
          <div className="flex h-fit w-fit items-center gap-3">
            <span className="text-xs text-accent-content md:text-sm">Não</span>
            <Checkbox
              name="accept_health_insurance"
              defaultChecked={clinicSettings?.accept_health_insurance || false}
            />
            <span className="text-xs text-accent-content md:text-sm">Sim</span>
          </div>
          {/* {formState.errors && formState.errors.accept_health_insurance && (
            <InputErrorMessage>
              {formState.errors.accept_health_insurance}
            </InputErrorMessage>
          )} */}
        </div>
        <div className="col-start-1 flex h-fit w-full flex-col gap-3 md:col-end-3">
          <label>Gostaria de adicionar alguma observação importante?</label>
          <Textarea
            name="notes"
            className="h-[52px] md:h-[144px]"
            defaultValue={clinicSettings?.notes || ""}
          />
          {/* {formState.errors && formState.errors.notes && (
            <InputErrorMessage>{formState.errors.notes}</InputErrorMessage>
          )} */}
        </div>
      </div>
      <Button className="md:w-[158px]">Salvar</Button>
      {/* {formState.errorMessage && (
        <Alert type="error" message={formState.errorMessage} />
      )}
      {formState.success && (
        <Alert message="Dados atualizados com sucesso!" type="success" />
      )} */}
    </form>
  );
};

export { GeneralInformationsForm };
