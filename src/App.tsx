import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CATApi from './shared/api';

import './App.css'

function App() {

    const [image, setImage] = useState();
    const handleClick = async () => {
      const data = await CATApi.GetRandomCat();
      const imgSource = CATApi.GetPhotoOfCat(data._id);
      setImage(imgSource);
      console.log(data);
    };

    return (<>
      <button onClick={handleClick}> </button>
      <img src={image}/>
    </>);
}

export default App
