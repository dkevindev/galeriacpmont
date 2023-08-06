'use client'
import { useState } from "react";

type todoList = {
  label:string,
  checked: boolean
}



const Page = () => {

  const [list, setList] = useState<todoList[]>([{label: 'Fazer compras', checked: true}]);
  const [tarefas, setTarefas] = useState('')

  const handleAddLabel = () => {
    if(tarefas.trim() !== '') {
      setList([...list, {label: tarefas, checked:false}])
      setTarefas('')
    } else {
      alert('Campo vazio!!')
    }
  }
  
  const handleDelete = (index:number) => {
    setList(list.filter((item, key) => key !== index))
  }

  const handleCheck = (index:number) => {
    const newList = [...list]
    newList[index].checked = !newList[index].checked
    setList(newList);
  }




  return (
    <div className="container mx-auto w-screen h-screen bg-white flex items-center text-black text-xl flex-col">
      <p>Lista de Tarefas</p>
      <div className="flex p-3 rounded-md bg-gray-600 ">
        <input type="text"
        placeholder="O que deseja fazer?"
        className="border-2 border-black p-2 text-lg rounded-md mr-2"
        value={tarefas}
        onChange={(e) => setTarefas(e.target.value)} />
        <button className="text-white" onClick={handleAddLabel}>Adicionar</button>
      </div>
      <p className="my-2 text-lg">{list.length} itens na lista</p>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="list-disc pl-2"> 
          <input type="checkbox" className="w-4 h-4 mr-2" checked={item.checked} onChange={() => handleCheck(index)}/>
          {item.label} - <button onClick={() => handleDelete(index)}>[deletar]</button></li>
        ))}
      </ul>

    </div>
  )
};

export default Page;