import { Minus, Plus, ShoppingCart } from 'phosphor-react';

interface BuyProps {
  price: number
}

export function Buy({ price }: BuyProps) {
  const formatedPrice = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  })

  return (
    <div className="flex flex-row max-w-52 items-center gap-6 mt-2">
      <div className="w-[67px]">
        <p className="font-sans font-normal text-sm text-base-text leading-tight">
          R$
          <span className="pl-1 font-baloo font-extrabold text-2xl text-base-text leading-tight">
            {formatedPrice}
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row bg-base-button rounded-md w-[72px] p-2 gap-2 justify-center items-center">
          <Minus
            size={14}
            weight="bold"
            className="font-sans text-purple-normal cursor-pointer hover:text-purple-dark"
          />
          <span className="font-sans text-base text-base-title">1</span>
          <Plus
            size={14}
            weight="bold"
            className="font-sans text-purple-normal cursor-pointer hover:text-purple-dark"
          />
        </div>
        <div className="flex items-center justify-center size-[38px] p-2 rounded-md bg-purple-dark cursor-pointer hover:bg-purple-normal">
          <ShoppingCart size={19} weight="fill" className="text-base-card" />
        </div>
      </div>
    </div>
  )
}
