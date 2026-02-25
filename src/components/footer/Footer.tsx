export function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="flex justify-center bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white">
      <div className="container flex flex-col items-center py-6 text-center">

        <h2 className="text-2xl font-bold">Medify</h2>

        <p className="text-lg mt-2">
          Cuidando da sua saúde com qualidade e responsabilidade.
        </p>

        <div className="mt-4 text-sm space-y-1">
          <p>Recife - PE</p>
          <p>(81) 99999-9999</p>
          <p>contato@medify.com</p>
        </div>

        <p className="text-sm mt-4">
          © {data} Medify - Todos os direitos reservados
        </p>

      </div>
    </div>
  );
}

export default Footer;