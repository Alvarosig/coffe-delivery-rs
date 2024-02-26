import { Buy } from "./Buy/Buy";
import { card } from "../../../data/cards.ts";

export function Card() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-10 mb-14">
      {card.map((card) => {
        return (
          <div
            key={card.id}
            className="w-64 h-[310px] bg-base-card rounded-tr-[36px] rounded-bl-[36px] rounded-tl-md rounded-br-md flex flex-col items-center gap-4"
          >
            <div className="absolute">
              <img
                src={card.img}
                alt={card.alt}
                className="relative -top-5 w-[100px] h-[100px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center pt-20">
              <div className="flex gap-1">
              {card.labels.map((label) => (
                <span
                  key={label.id}
                  className="font-sans font-bold text-[10px] text-yellow-dark px-2 py-1 text-center bg-yellow-light rounded-full leading-tight my-4"
                >
                  {label.text}
                </span>
              ))}
              </div>

              <div className="flex flex-col gap-8 items-center">
                <div className="flex flex-col gap-3 items-center text-center">
                  <h3 className="font-baloo font-bold text-xl text-base-subtitle leading-tight px-5">
                    {card.title}
                  </h3>
                  <p className="font-sans font-normal text-sm text-base-label leading-tight px-5">
                    {card.description}
                  </p>
                </div>
                <Buy price={card.price} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
