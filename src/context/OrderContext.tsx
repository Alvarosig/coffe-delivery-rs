import { createContext, useContext, ReactNode, useState } from "react"
import { FormValues } from "../components/FormOrder/FormOrder"

interface OrderProviderProps {
  children: ReactNode
}

interface ContextData {
  order: FormValues | null
  setOrder: React.Dispatch<React.SetStateAction<FormValues | null>>
  isFormSubmitted: boolean
  setFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

const OrderContext = createContext<ContextData>({} as ContextData)

function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<FormValues | null>(null)
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  const contextValue: ContextData = {
    order,
    setOrder,
    isFormSubmitted,
    setFormSubmitted,
  }

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  )
}

function useOrder(): ContextData {
  const context = useContext(OrderContext)

  if (!context) {
    throw new Error("Você não pode usar esse hook fora do contexto")
  }

  return context
}

export { OrderProvider, useOrder }
