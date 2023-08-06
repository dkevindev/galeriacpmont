import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface PhotoUploaderProps {
  onSuccess: () => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onSuccess }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      const filesArray: File[] = Array.from(event.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (selectedFiles.length === 0) {
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    for (const file of selectedFiles) {
      formData.append('images', file);
    }

    try {
      const response = await fetch('http://189.126.111.192:8000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setSelectedFiles([]);
        onSuccess();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Erro na requisição.');
    } finally {
      setIsLoading(false);
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }
  };

  return (
    <div className="mb-8 flex flex-col text-center justify-center items-center">
      <input
        type="file"
        id="file-input"
        multiple
        accept="image/*,video/*,image/heic"
        onChange={handleFileChange}
        className="my-4"
      />
      <button
        onClick={handleUpload}
        className="border border-white py-2 px-4"
        disabled={isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar Fotos'}
      </button>
      <ToastContainer />
    </div>
  );
};

export default PhotoUploader;
