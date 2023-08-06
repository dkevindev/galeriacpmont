"use client"
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Modal } from '@/components/Modal';
import PhotoUploader from '@/components/Upload';
import { PhotoItem } from '@/components/photoItem';

interface Photo {
  id: number;
  img: string;
}

const Page: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState<string>('');
  const [photoList, setPhotoList] = useState<Photo[]>([]);

  const openModal = (id: number): void => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.img);
      setShowModal(true);
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const fetchPhotos = () => {
    axios
      .get('http://192.168.1.103/photos')
      .then((response: AxiosResponse<Photo[]>) => {
        setPhotoList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  const handleUploadSuccess = () => {
    fetchPhotos(); // Atualiza a lista de fotos
  };


  useEffect(() => {
    fetchPhotos();
  }, []); // Chama fetchPhotos uma vez no início

  return (
    <div className="w-screen h-screen text-center flex flex-col">
      <p className="my-4 font-bold text-3xl">XXI CPMONT</p>
      <PhotoUploader onSuccess={handleUploadSuccess} />
      <section className="container mx-auto max-w-5xl grid grid-cols-4 gap-8 md:grid-cols-8 xl:grid-cols-10">
        {photoList.map((item) => (
          <div key={item.id} style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
            <img
              src={item.img}
              alt={`Photo ${item.id}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onClick={() => openModal(item.id)}
            />
          </div>
        ))}
      </section>

      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
};

export default Page;
