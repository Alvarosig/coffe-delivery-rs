import { MapPinLine, CurrencyDollar, Handbag } from "phosphor-react"
import { FormShip } from "./FormShip/FormShip"
import { PaymentMethod } from "./PaymentMethod/PaymentMethod"
import { OrderList } from "./OrderList/OrderList"
import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

export function FormOrder() {

  const { isThereAProduct } = useCart()

  return (
    <>
   {isThereAProduct.length > 0 ? (
    <div className="max-w-[1440px] px-40 m-auto flex flex-row items-start justify-center gap-8 mb-14 max-[1140px]:flex-col max-[1140px]:items-center max-md:px-5">
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-baloo text-base-subtitle font-bold text-lg max-[1140px]:text-center">
          Complete seu pedido
        </h2>

        <div className="bg-base-card p-10 gap-3 rounded-md max-md:p-5">
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

      <OrderList/>
    </div>
   ) : 
   (
    <div className="max-w-[1440px] px-40 m-auto flex flex-col items-center justify-center pt-32 pb-40 gap-3 max-[425px]:px-3 max-[425px]:text-center max-xl:pt-40">
      <Handbag size={92} className="text-white p-5 rounded-full bg-yellow-normal"/>
      <h2 className="font-baloo font-extrabold text-3xl text-base-title">Monte um carrinho de compras!</h2>
      <p className="font-baloo font-normal text-xl text-base-subtitle">Adicione produtos e tenha desconto no frete.</p>
      <Link to="/">
        <button type="button" className="p-4 rounded-full bg-purple-normal text-xl text-base-button hover:bg-purple-dark max-[425px]:w-auto">Conferir produtos</button>
      </Link>
    </div>
   )}
   </>
  )
}
