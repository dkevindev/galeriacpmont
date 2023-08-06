

const Page = () => {

  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format()
  
  const hour = new Date().getHours();
  
  
  let mensagem:string = 'oi'
  
  if (hour >= 0 && hour < 12) {
    mensagem = 'Bom dia'
  } else if (hour >= 12 && hour < 18) {
    mensagem = 'Boa tarde'
  } else if (hour >= 18 && hour < 23) {
    mensagem = 'Boa noite'
  }


  return (
    <div className="w-screen h-screen bg-gradient-to-r from-violet-800 to-blue-400 flex flex-col justify-center items-center"> 
      <div className="text-9xl">{fullTime}</div>
      <div className="text-4xl font-bold">{mensagem}</div>
    </div>
  )
};

export default Page;