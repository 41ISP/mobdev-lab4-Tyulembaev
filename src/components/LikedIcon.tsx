import React, { useState } from 'react'
import './LikedIcon.css'
import  {useCatStore} from '../shared/useCatStore'

interface Props {
    id:string,
    liked:boolean,
    onClick: (id:string) => void
}

const LikedIcon: React.FC<Props> = ({ id , liked, onClick}) => {


    const handleLiked = () => {
        onClick(id);
    }
    
    return (
        <img onClick={handleLiked}className='liked_image' src={liked ? "../../../liked.png": "../../../unliked.png"}/>
    )
}

export default LikedIcon