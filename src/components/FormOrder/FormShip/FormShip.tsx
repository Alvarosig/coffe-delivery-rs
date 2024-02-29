export function FormShip() {
  return (
    <form className="grid grid-cols-3 grid-rows-4 gap-4 max-md:flex max-md:flex-col max-md:flex-wrap">
      <input
        type="text"
        name=""
        id=""
        required
        placeholder="CEP"
        className="col-start-1 col-end-2 row-span-1 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />

      <input
        type="text"
        name=""
        id=""
        required
        placeholder="Rua"
        className="col-start-1 col-end-4 row-span-1 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />

      <input
        type="number"
        name=""
        id=""
        required
        placeholder="Número"
        className="col-start-1 col-end-2 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />

      <input
        type="text"
        name=""
        id=""
        placeholder="Complemento"
        className="col-start-2 col-end-4 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />
      
      <input
        type="text"
        name=""
        id=""
        required
        placeholder="Bairro"
        className="col-start-1 col-end-2 p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />

      <input
        type="text"
        name=""
        id=""
        required
        placeholder="Cidade"
        className="p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />

      <input
        type="text"
        name=""
        id=""
        required
        placeholder="UF"
        className="p-3 bg-base-input rounded-[4px] text-sm font-normal placeholder:text-base-label shadow ring-1 ring-base-button outline-none focus:ring-yellow-dark"
      />

    </form>
  )
}
