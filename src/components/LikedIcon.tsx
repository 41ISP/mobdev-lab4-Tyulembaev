import React, { useState } from 'react'
import './LikedIcon.css'
import  {useCatStore} from '../shared/useCatStore'

interface Props {
    id:string
}

const LikedIcon: React.FC<Props> = ({ id }) => {
    const { catsId, addCat, removeCat, isLikedCat }= useCatStore();
    const [isLiked, setIsLiked] = useState(isLikedCat(id))

    const handleLiked = () => {
        setIsLiked(!isLiked);
        if(isLiked)
            addCat(id);
        else
            removeCat(id)
    }
    
    return (
        <img onClick={handleLiked}className='liked_image' src={isLiked ? "../../../liked.png": "../../../unliked.png"}/>
    )
}

export default LikedIcon