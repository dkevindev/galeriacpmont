"use client"
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Modal } from '@/components/Modal';
import PhotoUploader from '@/components/Upload';
import ReactPaginate from 'react-paginate'; // Importe a biblioteca de paginação

interface Photo {
  id: number;
  type: 'img' | 'video';
  media: string;
}

const PHOTOS_PER_PAGE = 12; // Defina quantas fotos você deseja exibir por página

const Page: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState<string>('');
  const [photoList, setPhotoList] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const openModal = (id: number): void => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.media);
      setShowModal(true);
    }
  };

  const closeModal = (): void => {
    setShowModal(false);
  };

  const handleVideoFullScreen = (videoUrl: string) => {
    const videoElement = document.getElementById('fullscreen-video') as HTMLVideoElement;

    if (videoElement) {
      videoElement.src = videoUrl;
      videoElement.controls = true;
      videoElement.autoplay = true;

      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      }
    }
  };

  const fetchPhotos = () => {
    axios
      .get('http://189.126.111.192:8000/photos')
      .then((response: AxiosResponse<Photo[]>) => {
        setPhotoList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const startIndex = currentPage * PHOTOS_PER_PAGE;
  const endIndex = startIndex + PHOTOS_PER_PAGE;
  const currentPhotos = photoList.slice(startIndex, endIndex);

  return (
    <div className="w-screen h-screen text-center flex flex-col">
      <p className="my-4 font-bold text-3xl">XXI CPMONT</p>
      <PhotoUploader onSuccess={fetchPhotos} />
      <section className="container mx-auto max-w-5xl grid grid-cols-2 gap-2 md:grid-cols-4 xl:grid-cols-6 mb-2">
        {currentPhotos.map((item) => (
          <div key={item.id} style={{ width: '100%', paddingTop: '100%', position: 'relative' }}>
            {item.type === 'video' ? (
              <video
                id="fullscreen-video"
                controls
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onClick={() => handleVideoFullScreen(item.media)}
              >
                <source src={item.media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.media}
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
            )}
          </div>
        ))}
      </section>

      <ReactPaginate
        pageCount={Math.ceil(photoList.length / PHOTOS_PER_PAGE)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        className='text-white text-center flex flex-line justify-center border rounded-md p-2 mb-4 gap-2 w-screen items-center'
      />
      {showModal && <Modal media={imageOfModal} closeModal={closeModal} handleVideoFullScreen={handleVideoFullScreen} />}
    </div>
  );
};

export default Page;
