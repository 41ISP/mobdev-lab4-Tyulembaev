import { useEffect, useState } from 'react';
import LikedIcon from '../../components/LikedIcon';
import './MainPage.css'
import CATApi from '../../shared/api';

const MainPage = () => {
    const [imageSrc, setImageSrc] = useState("../../../emptycat.jpg")
    const [loading, setLoading] = useState(false) //TODO set this on true
    const [error, setError] = useState(false)

    const fetchImage = async ()=>
    {
        try{
            const randomCat = await CATApi.GetRandomCat();
            const catUrl = await CATApi.GetPhotoOfCat(randomCat._id);
            setImageSrc(catUrl);
            setLoading(false);
        }catch(e){
            console.log(e);
            setError(true);
        }
    }
    const handleNextButton = () => {
        fetchImage();
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
            <div className="topper_container">
                
            </div>
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
                <LikedIcon/>
                <button onClick={handleNextButton}>Next</button>
            </div>
        </div>
    )
}

export default MainPage;