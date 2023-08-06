type Props = {
    media: string;
    closeModal: () => void;
    handleVideoFullScreen: (videoUrl: string) => void;
  };
  
  export const Modal = ({ media, closeModal, handleVideoFullScreen }: Props) => {
    const isVideo = media.endsWith('.mp4') || media.endsWith('.mov');
  
    return (
      <>
        <div
          className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/90"
          onClick={closeModal}
        >
          {isVideo ? (
  <video playsInline controls autoPlay className="max-w-screen max-h-screen" onClick={() => handleVideoFullScreen(media)}>
    <source src={media} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
) : (
  <img src={media} alt="" className="max-w-screen max-h-screen" />
)}
        </div>
        <div
          className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-5xl"
          onClick={closeModal}
        >
          X
        </div>
      </>
    );
  };
  