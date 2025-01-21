import React from 'react';
import './FavouriteCatsPage.css'
import { useCatStore } from '../../shared/useCatStore';
import CATApi from '../../shared/api';

const FavouriteCatsPage: React.FC = () => {
    
    const catsId = useCatStore((state => state.catsId));

    return (
        <div className="gallery">
          {catsId.map((id, index) => (
            <div className="gallery-item" key={index}>
              <img src={`https://cataas.com/cat/${id}`} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      );
}

export default FavouriteCatsPage;