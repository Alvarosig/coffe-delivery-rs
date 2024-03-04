import { Control, Controller, FieldErrorsImpl } from "react-hook-form"
import { FormValues } from "../FormOrder"

interface FormShipValues {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
}
interface FormShipProps {
  control: Control<FormValues>
  errors: FieldErrorsImpl<FormShipValues>
}

export function FormShip({ control, errors }: FormShipProps) {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4 max-lg:flex max-lg:flex-col max-md:flex max-md:flex-col max-md:flex-wrap">
      <div className="flex flex-col gap-1">
        <Controller
          name="cep"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              autoFocus
              placeholder="CEP"
              className="col-start-1 col-end-2 row-span-1 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
            />
          )}
        />
        {errors.cep && (
          <span className="text-[10px] text-base-label">{errors.cep.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Controller
          name="rua"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Rua"
              className="col-start-1 col-end-4 row-span-1 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
            />
          )}
        />
        {errors.rua && (
          <span className="text-[10px] text-base-label">{errors.rua.message}</span>
        )}
      </div>

      <Controller
        name="numero"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            placeholder="Número"
            className="col-start-1 col-end-2 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
          />
        )}
      />

      <Controller
        name="complemento"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="Complemento"
            className="col-start-2 col-end-4 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
          />
        )}
      />

      <div className="flex flex-col gap-1">
        <Controller
          name="bairro"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Bairro"
              className="col-start-1 col-end-2 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
            />
          )}
        />
        {errors.bairro && (
          <span className="text-xs text-base-label">
            {errors.bairro.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Controller
          name="cidade"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              placeholder="Cidade"
              className="p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
            />
          )}
        />
        {errors.cidade && (
          <span className="text-[10px] text-base-label">
            {errors.cidade.message}
          </span>
        )}
      </div>

      <Controller
        name="uf"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder="UF"
            className="p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
          />
        )}
      />
    </div>
  )
}
