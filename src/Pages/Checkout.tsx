import { Footer } from "../components/Footer/Footer"
import { FormOrder } from "../components/FormOrder/FormOrder"

export function Checkout() {
  return (
    <>
      <div className="max-w-[1440px] px-40 m-auto">
        <FormOrder />
      </div>
      <Footer />
    </>
  )
}
