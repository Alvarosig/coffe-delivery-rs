import { MapPinLine, CurrencyDollar } from "phosphor-react"
import { FormShip } from "./FormShip/FormShip"
import { PaymentMethod } from "./PaymentMethod/PaymentMethod"
import { ItemsOrder } from "./ItemsOrder/ItemsOrder"

export function FormOrder() {
  return (
    <div className="flex flex-row gap-8 mb-14">
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-baloo text-base-subtitle font-bold text-lg">
          Complete seu pedido
        </h2>

        <div className="bg-base-card p-10 gap-3 rounded-md">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row items-start justify-start gap-2">
              <MapPinLine
                size={22}
                weight="regular"
                className="text-yellow-dark"
              />
              <div className="flex-1">
                <h3 className="font-sans font-normal text-base text-base-subtitle">
                  Endereço de entrega
                </h3>
                <p className="font-sans font-normal text-sm text-base-text">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <FormShip />
          </div>
        </div>

        <div className="bg-base-card p-10 rounded-md flex flex-col gap-8">
          <div className="flex flex-row items-start justify-start gap-2">
            <CurrencyDollar
              size={22}
              weight="fill"
              className="text-purple-normal"
            />
            <div>
              <h3 className="font-sans font-normal text-base text-base-subtitle">
                Pagamento
              </h3>
              <p className="font-sans font-normal text-sm text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <PaymentMethod />
        </div>
      </div>

      <ItemsOrder/>
    </div>
  )
}
