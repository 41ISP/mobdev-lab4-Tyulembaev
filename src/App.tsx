import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NEWSApi from './shared/api';

import './App.css'

function App() {

    const handleClick = async () => {
      const data = await NEWSApi.GetAllNews();
      console.log(data);
    };

    return (<>
      <button onClick={handleClick}> </button>
    </>);
}

export default App
