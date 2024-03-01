import { Minus, Plus, Trash } from "phosphor-react"
import { useCart } from "../../../context/CartContext"

export function OrderList() {
  const {
    cartData,
    handleAddProductToCart,
    handleSubtractProductToCart,
    handleRemoveProductFromCart,
  } = useCart()

  const totalProductValue = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const shipment = 3.5
  const totalCartValue = totalProductValue + shipment

  function moneyFormatter(value: number) {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(value)
  }

  return (
    <div className="flex flex-col gap-[15px]">
      <h2 className="font-baloo text-base-subtitle font-bold text-lg max-[1140px]:text-center">
        Cafés selecionados
      </h2>

      <div className="bg-base-card p-10 gap-3 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md max-[425px]:p-[10px]">
        {cartData.map((item) => (
          <>
            <div className="flex flex-row gap-[50px]">
              <div className="flex gap-5">
                <img src={item.img} alt="Café expresso" className="size-16" />
                <div className="flex flex-col gap-2">
                  <p>{item.title}</p>
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-row bg-base-button rounded-md w-[72px] p-2 gap-2 justify-center items-center select-none">
                      <Minus
                        size={14}
                        onClick={() => handleSubtractProductToCart(item)}
                        weight="bold"
                        className="font-sans text-purple-normal cursor-pointer hover:text-purple-dark"
                      />
                      <span className="font-sans text-base text-base-title">
                        {item.quantity}
                      </span>
                      <Plus
                        size={14}
                        onClick={() => handleAddProductToCart(item)}
                        weight="bold"
                        className="font-sans text-purple-normal cursor-pointer hover:text-purple-dark"
                      />
                    </div>
                    <button
                      type="button"
                      className="flex flex-row bg-base-button rounded-md p-2 gap-1 justify-center items-center cursor-pointer hover:bg-base-hover"
                    >
                      <Trash
                        size={16}
                        weight="regular"
                        className="text-purple-normal"
                      />
                      <span
                        onClick={() => handleRemoveProductFromCart(item.id)}
                        className="font-sans font-normal text-xs text-base-text leading-[160%]"
                      >
                        REMOVER
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="font-sans font-bold text-base text-base-text">
                {moneyFormatter(item.price)}
              </h3>
            </div>
            <hr className="h-px bg-base-button border-0 my-6" />
          </>
        ))}

        <div className="flex flex-col gap-3 font-sans font-normal text-base-text leading-[130%]">
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">Total de Itens</p>
            <span className="text-base">
              {moneyFormatter(totalProductValue)}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="text-sm">Entrega</p>
            <span className="text-base">{moneyFormatter(shipment)}</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className="font-bold text-xl">Total</p>
            <span className="font-bold text-xl">
              {moneyFormatter(totalCartValue)}
            </span>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center mt-6">
          <button
            type="submit"
            className="flex-1 py-3 bg-yellow-normal text-white rounded-md font-bold text-sm leading-[160%] hover:bg-yellow-dark"
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  )
}
