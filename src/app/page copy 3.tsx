const Page = () => {
  return (
    <div className="container mx-auto">
    
      <div className="p-3 rounded-md bg-gray-400">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="w-full h-60 bg-cover bg-center md:col-span-2 md:row-span-2 md:h-full bg-[url(https://www.tuacasa.com.br/wp-content/uploads/2015/06/fachadas-de-casas-000.jpg)]"></div>
          <div className="w-full h-60 bg-cover bg-center bg-[url(https://www.cubocasa.com.br/wp-content/uploads/2021/10/luz-sofisticacao-vidro-madeira.jpg)]"></div>
          <div className="w-full h-60 bg-cover bg-center bg-[url(https://www.cubocasa.com.br/wp-content/uploads/2021/10/fachada-lazer.jpg)]"></div>
        </div>
        <div className="text-2xl font-bold mt-3 text-black">Título da Casa</div>
        <div className="flex gap-2 mt-3">
          <div className="rounded-full px-3 py-1 text-sm bg-green-700">Campo</div>
          <div className="rounded-full px-3 py-1 text-sm bg-green-700">Moderno</div>
          <div className="rounded-full px-3 py-1 text-sm bg-green-700">Piscina</div>
        </div>
      </div>
      
    </div>
  )
};

export default Page;