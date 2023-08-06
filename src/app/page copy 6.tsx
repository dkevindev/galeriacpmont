'use client'
import { Modal } from '@/components/Modal';
import { PhotoItem } from '@/components/photoItem';
import {photoList} from '@/components/photoList'
import { useState } from 'react';


const Page = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id:number) => {
    let photo = photoList.find(item => item.id === id)
    if (photo) {
      setImageOfModal(photo.img);
      setShowModal(true)
    }
    
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  

  return (
    <div className=" w-screen h-screen text-center flex flex-col">
      <p className='my-10 font-bold text-3xl'>Galeria de Fotos intergaláticas</p>
      <section className='container mx-auto max-w-5xl grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
        {photoList.map((item) => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick={() => openModal(item.id)}
          />
        ))}
      </section>
      
      {showModal && 
        <Modal image={imageOfModal} closeModal={closeModal}/>
      }

    </div>
  )
};

export default Page;