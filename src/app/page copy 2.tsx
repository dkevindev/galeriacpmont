const Page = () => {
  return (
    <div className="container mx-auto p-5">
    
      <div className="rounded-xl overflow-hidden p-6 bg-slate-800 md:flex md:p-0">
        <div className="w-24 h-24 bg-cover bg-center rounded-full mx-auto md:w-48 md:h-auto md:rounded-none bg-[url(https://upload.wikimedia.org/wikipedia/commons/c/cc/BenFranklinDuplessis.jpg)]"></div>
        <div className="grow pt-6 text-center md:p-8 md:text-left">
          <p className="text-lg text-white">"Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu aprendo."</p>
          <p className="mt-3 font-bold text-sky-400">Bejmamin Franklin</p>
          <p className="text-slate-500">Político, EUA</p>
        </div>
      </div>
      
    </div>
  )
};

export default Page;