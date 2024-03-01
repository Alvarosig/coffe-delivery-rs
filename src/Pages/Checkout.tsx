import { Footer } from "../components/Footer/Footer"
import { FormOrder } from "../components/FormOrder/FormOrder"

export function Checkout() {
  return (
    <div className="flex flex-col h-screen">
      <FormOrder />
      <Footer />
    </div>
  )
}
