import { Minus, Plus, ShoppingCart } from "phosphor-react"

export function Buy() {
  return (
    <div className="flex flex-row max-w-52 items-center gap-6">
      <div className="w-[67px]">
        <p className="font-sans font-normal text-sm text-base-text leading-tight">
          R$
          <span className="pl-1 font-baloo font-extrabold text-2xl text-base-text leading-tight">
            9,90
          </span>
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <div className="flex flex-row bg-base-button rounded-md w-[72px] p-2 gap-2 justify-center items-center">
          <Minus
            size={14}
            weight="bold"
            className="font-sans text-purple-normal cursor-pointer"
          />
          <span className="font-sans text-base text-base-title">1</span>
          <Plus
            size={14}
            weight="bold"
            className="font-sans text-purple-normal cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-center size-[38px] p-2 rounded-md bg-purple-dark cursor-pointer">
          <ShoppingCart size={19} weight="fill" className="text-base-card" />
        </div>
      </div>
    </div>
  );
}
