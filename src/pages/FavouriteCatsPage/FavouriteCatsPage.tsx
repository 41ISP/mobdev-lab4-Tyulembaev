import React from 'react';
import './FavouriteCatsPage.css'
import { useCatStore } from '../../shared/useCatStore';
import CATApi from '../../shared/api';
import LikedIcon from '../../components/LikedIcon';

const FavouriteCatsPage: React.FC = () => {
    
   
    const { catsId, addCat, removeCat, isLikedCat }= useCatStore();

    const onClickLikedIcon = (id:string) => {
            removeCat(id)
      }

    return (
        <div className="gallery">
          {catsId.map((id, index) => (
            <div className="gallery-item" key={index}>
              <img src={`https://cataas.com/cat/${id}`} alt={`Gallery item ${index + 1}`} />
              <LikedIcon id={id} liked={true} onClick={onClickLikedIcon}/>
            </div>
          ))}
        </div>
      );
}

export default FavouriteCatsPage;