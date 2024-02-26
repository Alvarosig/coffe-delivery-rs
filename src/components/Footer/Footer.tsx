import {
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
  Envelope,
} from "phosphor-react"
import logo from "../../assets/logo-coffee.png"

export function Footer() {
  return (
    <footer className="bg-base-title text-base-input font-baloo grid grid-cols-7 grid-rows-1 gap-10 py-10 px-40">
      <div className="col-start-2 col-end-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" />
            <h3 className="font-extrabold text-xl">
              O Conceito da Coffee Delivery
            </h3>
          </div>
          <p className="text-lg">
            O CoffeDelivery é um sucesso brasileiro! Venha provar e se apaixone
            pela sabor do verdadeiro café ❤. Nós oferecemos uma variedade de
            cafés de alta qualidade, entregues diretamente na sua porta.
            Experimente nossos serviços e descubra a diferença que o
            CoffeDelivery pode fazer no seu dia a dia. Vá em frente e
            experimente! ☕
          </p>
        </div>
      </div>

      <div className="col-start-4 col-end-5">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="font-extrabold text-xl">A empresa</h3>
          <div>
            <ul className="flex flex-col items-center gap-2">
              <li>Sobre nós</li>
              <li>Entre em contato</li>
              <li>Termos e serviços</li>
            </ul>
          </div>
          <h3 className="font-extrabold text-xl">Conecte-se</h3>
          <ul className="flex gap-2 justify-start">
            <li>
              <a href="https://www.linkedin.com/in/alvarosig/" target="_blank">
                <LinkedinLogo
                  size={28}
                  className="cursor-pointer"
                  alt="Visite meu Linkedin"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/Alvarosig" target="_blank">
                <GithubLogo
                  size={28}
                  className="cursor-pointer"
                  alt="Visite meu Github"
                />
              </a>
            </li>
            <li>
              <a href="">
                <InstagramLogo
                  size={28}
                  className="cursor-pointer"
                  alt="Visite meu Instagram"
                />
              </a>  
            </li>
          </ul>
        </div>
      </div>

      <div className="col-start-5 col-end-7">
        <div className="flex flex-col gap-3">
          <h3 className="font-extrabold text-xl">Coffee Delivery</h3>

          <p>Encontre o melhor do café em um só lugar.</p>

          <div>
            <p>Coffee Delivery</p>
            <p>90, Mar Grosso</p>
            <p>Laguna, Santa Catarina</p>
            <p>88790-0000</p>
            <p className="flex items-center gap-1">
              Email: <Envelope size={16} alt="Me mande um email"/>
              alvarosilvalg@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
