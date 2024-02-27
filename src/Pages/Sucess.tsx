import { Footer } from "../components/Footer/Footer"
import { SucessOrder } from "../components/SucessOrder/SucessOrder"

export function Sucess() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-grow">
        <div className="max-w-[1440px] px-40 m-auto">
          <SucessOrder />
        </div>
      </div>
      <Footer />
    </div>
  )
}
