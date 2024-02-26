import { Bank, CreditCard, Money } from "phosphor-react";

export function PaymentMethod() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div className="p-4 bg-base-button rounded-md flex flex-row gap-3 cursor-pointer hover:bg-base-hover">
        <CreditCard size={22} className="text-purple-normal" />
        <h3 className="font-sans font-normal text-base text-base-subtitle">
          CARTÃO DE CRÉDITO
        </h3>
      </div>
      <div className="p-4 bg-base-button rounded-md flex flex-row gap-3 cursor-pointer hover:bg-base-hover">
        <Bank size={22} className="text-purple-normal" />
        <h3 className="font-sans font-normal text-base text-base-subtitle">
          CARTÃO DE DÉBITO
        </h3>
      </div>
      <div className="p-4 bg-base-button rounded-md items-center flex flex-row gap-3 cursor-pointer hover:bg-base-hover">
        <Money size={22} className="text-purple-normal" />
        <h3 className="font-sans font-normal text-base text-base-subtitle">
          DINHEIRO
        </h3>
      </div>
    </div>
  )
}
