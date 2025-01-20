import React from 'react';
import './FavouriteCatsPage.css'
import { useCatStore } from '../../shared/useCatStore';

const FavouriteCatsPage: React.FC = () => {
    
    const catId = useCatStore((state => state.catsId));
    
    return (
        <div className="gallery">
          {catId.map((src, index) => (
            <div className="gallery-item" key={index}>
              <img src={src} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      );
}

export default FavouriteCatsPage;