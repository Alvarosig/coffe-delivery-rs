import coffe_1 from "../../../assets/coffee_1.png"
import { Buy } from "./Buy/Buy";

export function Card() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-10">
      <div className="w-64 h-[310px] bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md flex flex-col items-center gap-4">
        <div className="flex flex-col gap-3">
          <img src={coffe_1} alt="Café Expresso" />
          <span className="font-sans font-bold text-[10px] text-yellow-dark px-2 py-1 bg-yellow-light rounded-full leading-tight">
            TRADICIONAL
          </span>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="font-baloo font-bold text-xl text-base-subtitle leading-tight">
              Expresso Tradicional
            </h3>
            <p className="font-sans font-normal text-sm text-base-label leading-tight px-5">
              O tradicional café feito com água quente e grãos moídos
            </p>
          </div>
          <Buy />
        </div>
      </div>
    </div>
  );
}
