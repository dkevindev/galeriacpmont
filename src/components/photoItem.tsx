import { photoTypes } from "./photoList"

type Props = {
    photo: photoTypes,
    onClick: () => void
}

export const PhotoItem = ({photo, onClick}:Props) => {
    
    
    return (
        <div className="cursor-pointer hover:opacity-80" onClick={onClick}>
            <img src={photo.img} alt="" className="w-full h-full"  onClick={onClick}/>
        </div>

    )
}