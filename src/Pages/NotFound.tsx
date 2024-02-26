import { Link } from 'react-router-dom';

import not_found from '../assets/not_found.svg';

export function NotFound() {
  return (
    <div className="flex flex-row justify-center items-center font-baloo bg-background gap-36 h-dvh">
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl text-base-title">404</h1>
        <h2 className="text-5xl text-base-title">Ops...</h2>
        <h2 className="text-5xl text-base-title">Página não encontrada</h2>
        <p className="text-2xl text-base-text">
          A página não existe ou foi removida!
        </p>
        <p className="text-2xl text-base-text">
          Sugerimos que você volte para a página de ínicio :)
        </p>
        <button className="rounded-full bg-purple-normal text-3xl px-4 py-3 hover:bg-purple-dark text-base-button">
          <Link to="/">Voltar para a página principal</Link>
        </button>
      </div>
      <img
        src={not_found}
        alt="Imagem de página não encontrada"
        className="size-96"
      />
    </div>
  )
}
