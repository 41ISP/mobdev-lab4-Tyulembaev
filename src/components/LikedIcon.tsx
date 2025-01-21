import React, { useState } from 'react'
import './LikedIcon.css'
import  {useCatStore} from '../shared/useCatStore'

interface Props {
    id:string,
    liked : boolean
}

const LikedIcon: React.FC<Props> = ({ id, liked }) => {
    const { catsId, addCat, removeCat, isLikedCat }= useCatStore();
    const [isLiked, setIsLiked] = useState(liked)

    const handleLiked = () => {
        if(!isLiked)
            addCat(id);
        else
            removeCat(id)
        setIsLiked(!isLiked);
    }
    
    return (
        <img onClick={handleLiked}className='liked_image' src={isLiked ? "../../../liked.png": "../../../unliked.png"}/>
    )
}

export default LikedIcon