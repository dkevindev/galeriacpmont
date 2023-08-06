"use client"
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Modal } from '@/components/Modal';
import PhotoUploader from '@/components/Upload';

interface Photo {
  id: number;
  type: 'img' | 'video';
  media: string;
}

const Page: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageOfModal, setImageOfModal] = useState<string>('');
  const [photoList, setPhotoList] = useState<Photo[]>([]);

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
      .get('http://192.168.1.103/photos')
      .then((response: AxiosResponse<Photo[]>) => {
        setPhotoList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  const handleUploadSuccess = () => {
    fetchPhotos();
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="w-screen h-screen text-center flex flex-col">
      <p className="my-4 font-bold text-3xl">XXI CPMONT</p>
      <PhotoUploader onSuccess={handleUploadSuccess} />
      <section className="container mx-auto max-w-5xl grid grid-cols-2 gap-8 md:grid-cols-4 xl:grid-cols-6">
        {photoList.map((item) => (
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

      {showModal && <Modal media={imageOfModal} closeModal={closeModal} handleVideoFullScreen={handleVideoFullScreen} />}
    </div>
  );
};

export default Page;
