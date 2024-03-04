import { MapPinLine, CurrencyDollar, Handbag } from "phosphor-react"
import { FormShip } from "./FormShip/FormShip"
import { PaymentMethod } from "./PaymentMethod/PaymentMethod"
import { OrderList } from "./OrderList/OrderList"
import { useCart } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useOrder } from "../../context/OrderContext"
export interface FormValues {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  metodo: "Crédito" | "Débito" | "Dinheiro" 
}

const schemaOrder = z.object({
  cep: z.string().min(1, { message: "O campo cep é obrigatório" }),
  rua: z.string().min(1, { message: "O campo rua é obrigatório" }),
  numero: z.string(),
  complemento: z.string(),
  bairro: z.string().min(1, { message: "O campo bairro é obrigatório" }),
  cidade: z.string().min(1, { message: "O campo cidade é obrigatório" }),
  uf: z.string(),
  metodo: z
    .enum(["Crédito", "Débito", "Dinheiro"])
    .refine((value) => value !== null),
})

export function FormOrder() {
  const { isThereAProduct, setCartData } = useCart()
  const { setOrder, setFormSubmitted, isFormSubmitted } = useOrder()
  console.log(isFormSubmitted)
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schemaOrder),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      metodo: undefined,
    },
  })

  function createOrder(data: FormValues) {
    setOrder((prevOrder) => {
      const newOrder = { ...prevOrder, ...data }
      return newOrder
    })
    setCartData([])
    setFormSubmitted(prevValue => !prevValue)

    reset()
    navigate("/checkout/sucess")
  }

  return (
    <>
      {isThereAProduct.length > 0 ? (
        <div className="max-w-[1440px] m-auto flex flex-row items-start justify-center gap-8 mb-14 max-md:px-5 max-lg:px-2">
          <form
            onSubmit={handleSubmit(createOrder)}
            className="max-w-[1440px] flex gap-[15px] max-[1140px]:flex-col max-[1140px]:items-center"
          >
            <div className="flex flex-col gap-[15px]">
              <h2 className="font-baloo text-base-subtitle font-bold text-lg max-[1140px]:text-center">
                Complete seu pedido
              </h2>

              <div className="bg-base-card p-10 gap-3 rounded-md max-md:p-5 max-[375px]:p-[10px]">
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
                  <FormShip control={control} errors={errors} />
                </div>
              </div>

              <div className="bg-base-card p-10 rounded-md flex flex-col gap-8 max-[375px]:p-[10px]">
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
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </div>

                <PaymentMethod control={control} errors={errors} />
              </div>
            </div>

            <OrderList />
          </form>
        </div>
      ) : (
        <div className="max-w-[1440px] px-40 m-auto flex flex-col items-center justify-center pt-32 pb-40 gap-3 max-[425px]:px-3 max-[425px]:text-center max-xl:pt-40">
          <Handbag
            size={92}
            className="text-white p-5 rounded-full bg-yellow-normal"
          />
          <h2 className="font-baloo font-extrabold text-3xl text-base-title">
            Monte um carrinho de compras!
          </h2>
          <p className="font-baloo font-normal text-xl text-base-subtitle">
            Adicione produtos e tenha desconto no frete.
          </p>
          <Link to="/">
            <button
              type="button"
              className="p-4 rounded-full bg-purple-normal text-xl text-base-button hover:bg-purple-dark max-[425px]:w-auto"
            >
              Conferir produtos
            </button>
          </Link>
        </div>
      )}
    </>
  )
}
