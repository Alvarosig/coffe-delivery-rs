import { Bank, CreditCard, Money } from "phosphor-react"
import { Control, Controller, FieldErrors } from "react-hook-form"
import { FormValues } from "../FormOrder"

interface PaymentMethodValues {
  metodo: "Crédito" | "Debito" | "Dinheiro"
}

interface PaymentMethodProps {
  control: Control<FormValues>
  errors: FieldErrors<PaymentMethodValues>
}

export function PaymentMethod({ control }: PaymentMethodProps) {
  return (
    <div className="flex flex-row gap-3 items-center max-md:flex-col">
      <Controller
        name="metodo"
        control={control}
        defaultValue="Crédito"
        render={({ field }) => (
          <label className="p-4 bg-base-button rounded-md flex flex-row gap-3 cursor-pointer hover:bg-base-hover active:bg-purple-light active:shadow active:ring-1 active:ring-purple-normal">
            <input {...field} value="Crédito" type="radio" className="hidden" />
            <CreditCard size={22} className="text-purple-normal" />
            <h3 className="font-sans font-normal text-base text-base-subtitle whitespace-nowrap">
              CARTÃO DE CRÉDITO
            </h3>
          </label>
        )}
      />

      <Controller
        name="metodo"
        control={control}
        defaultValue="Débito"
        render={({ field }) => (
          <label className="p-4 bg-base-button rounded-md flex flex-row gap-3 cursor-pointer hover:bg-base-hover active:bg-purple-light active:shadow active:ring-1 active:ring-purple-normal">
            <input {...field} value="Débito" type="radio" className="hidden" />
            <Bank size={22} className="text-purple-normal" />
            <h3 className="font-sans font-normal text-base text-base-subtitle whitespace-nowrap">
              CARTÃO DE DÉBITO
            </h3>
          </label>
        )}
      />

      <Controller
        name="metodo"
        control={control}
        defaultValue="Dinheiro"
        render={({ field }) => (
          <label className="p-4 bg-base-button rounded-md flex flex-row gap-3 cursor-pointer hover:bg-base-hover active:bg-purple-light active:shadow active:ring-1 active:ring-purple-normal">
            <input {...field} value="Dinheiro" type="radio" className="hidden" />
            <Money size={22} className="text-purple-normal" />
            <h3 className="font-sans font-normal text-base text-base-subtitle whitespace-nowrap">
              DINHEIRO
            </h3>
          </label>
        )}
      />
    </div>
  )
}
