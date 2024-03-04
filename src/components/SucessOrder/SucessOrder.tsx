import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import delivery from '../../assets/delivery.svg'
import { useOrder } from "../../context/OrderContext"
import { Navigate, useLocation } from "react-router-dom";

export function SucessOrder() {
  const { order } = useOrder()
  const location = useLocation();

  if (!order && location.pathname === '/checkout/sucess') {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="flex flex-row justify-between items-center mt-20 max-[1180px]:flex-col max-[1180px]:gap-10 max-[1180px]:my-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-1">
          <h1 className="font-baloo font-extrabold text-[32px] text-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <h2 className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o café chegará até você
          </h2>
        </div>
        <div className="flex flex-col gap-8 p-10 rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md shadow ring-1 ring-purple-dark">
          <div className="flex flex-row gap-3 items-center">
            <div className="size-8 rounded-full bg-purple-normal p-2 items-center justify-center">
              <MapPin
                size={16}
                fill="white"
                weight="regular"
                className="text-background"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-base text-base-text">
                Entrega em{" "}
                <span className="font-bold text-base text-base-text">
                  {order?.rua}
                </span>
              </p>
              <p className="inline-block">{order?.cidade}, {order?.uf}</p>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <div className="size-8 rounded-full bg-yellow-normal p-2 items-center justify-center">
              <Timer size={16} weight="fill" className="text-background" />
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-base text-base-text">
                Previsão de entrega
              </p>
              <span className="font-bold text-base text-base-text">
                20 min - 30 min
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <div className="size-8 rounded-full bg-yellow-dark p-2 items-center justify-center">
              <CurrencyDollar
                size={16}
                weight="fill"
                className="text-background"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-normal text-base text-base-text">
                Pagamento na entrega
              </p>
              <span className="font-bold text-base text-base-text">
                {order?.metodo}
              </span>
            </div>
          </div>
        </div>
      </div>

      <img
        src={delivery}
        alt="Um rapaz andando de moto realizando a entrega do pedido"
        className="max-md:hidden"
      />
    </div>
  )
}
