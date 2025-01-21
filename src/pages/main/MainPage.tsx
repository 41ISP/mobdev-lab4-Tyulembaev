import React, { useEffect, useState } from 'react';
import LikedIcon from '../../components/LikedIcon';
import './MainPage.css'
import CATApi from '../../shared/api';
import { useCatStore } from '../../shared/useCatStore';

const MainPage = () => {
    const [imageSrc, setImageSrc] = useState("../../../emptycat.jpg")
    const [catId, setCatId] = useState('')
    
    const [loading, setLoading] = useState(true) //TODO set this on true
    const [error, setError] = useState(false)

        const { catsId, addCat, removeCat, isLikedCat }= useCatStore();
        const [isLiked, setIsLiked] = useState(false)

    const onClickLikedIcon = (id:string) => {
        if(!isLiked)
            addCat(id);
        else
            removeCat(id)
        setIsLiked(!isLiked);
    }

    const fetchImage = async ()=>
    {
        try{
            const randomCat = await CATApi.GetRandomCat();
            setCatId(randomCat._id);
            const catUrl = await CATApi.GetPhotoOfCat(randomCat._id);
            // TODO а вдруг нам поподется одно и тоже два раза?????
            setImageSrc(catUrl);
            setLoading(false);
        }catch(e){
            console.log(e);
            setError(true);
        }
    }
    const handleNextButton = () => {
        fetchImage();
        setIsLiked(false);
        console.log('next cat')
    }
    useEffect( () => {
        fetchImage();
    },[]);

    
    if(error)
        return <div className="main_container">ERROR</div>

    if(loading)
        return (        
        <div className="main_container">
            <div className="body_container">
                <img src={imageSrc}/>
                <h1>Ищем кота для вас</h1>
            </div>
        </div>)

    return (
        <div className="main_container">
            <div className="topper_container">
                
            </div>
            <div className="body_container">
                <img src={imageSrc}/>
                <LikedIcon id = {catId} liked={isLiked} onClick={onClickLikedIcon}/>
                <button onClick={handleNextButton}>Next</button>
            </div>
        </div>
    )
}

export default MainPage;