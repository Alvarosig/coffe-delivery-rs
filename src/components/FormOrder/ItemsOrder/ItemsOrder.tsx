import { Minus, Plus, Trash } from "phosphor-react"
import coffee_1 from "../../../assets/coffee_1.png"
import coffe_6 from "../../../assets/coffe_6.png"

export function ItemsOrder() {
  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="font-baloo text-base-subtitle font-bold text-lg">
        Cafés selecionados
      </h2>
      <div className="bg-base-card p-10 gap-3 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md">
        <div className="flex flex-row gap-[50px]">
          <div className="flex gap-5">
            <img src={coffee_1} alt="Café expresso" className="size-16" />
            <div className="flex flex-col gap-2">
              <p>Expresso Tradicional</p>
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
                <div className="flex flex-row bg-base-button rounded-md p-2 gap-1 justify-center items-center cursor-pointer hover:bg-base-hover">
                  <Trash
                    size={16}
                    weight="regular"
                    className="text-purple-normal"
                  />
                  <span className="font-sans font-normal text-xs text-base-text leading-[160%]">
                    REMOVER
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-sans font-bold text-base text-base-text">
            R$9,90
          </h3>
        </div>

        <hr className="h-px bg-base-button border-0 my-6" />

        <div className="flex flex-row gap-[50px]">
          <div className="flex gap-5">
            <img src={coffe_6} alt="Café expresso" className="size-16" />
            <div className="flex flex-col gap-2">
              <p>Latte</p>
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
                <div className="flex flex-row bg-base-button rounded-md p-2 gap-1 justify-center items-center cursor-pointer hover:bg-base-hover">
                  <Trash
                    size={16}
                    weight="regular"
                    className="text-purple-normal"
                  />
                  <span className="font-sans font-normal text-xs text-base-text leading-[160%]">
                    REMOVER
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-sans font-bold text-base text-base-text">
            R$19,80
          </h3>
        </div>

        <hr className="h-px bg-base-button border-0 my-6" />

        <div className="flex flex-col gap-3 font-sans font-normal text-base-text leading-[130%]">
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">Total de Itens</p>
            <span className="text-base">R$29,70</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">Entrega</p>
            <span className="text-base">R$3,50</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-bold text-xl">Total</p>
            <span className="font-bold text-xl">R$33,20</span>
          </div>
        </div>
          
        <div className="flex flex-1 justify-center items-center mt-6">
          <button type="submit" className="flex-1 py-3 bg-yellow-normal text-white rounded-md font-bold text-sm leading-[160%] hover:bg-yellow-dark">
            CONFIRMAR PEDIDO
          </button>
        </div>
        
      </div>
    </div>
  )
}
