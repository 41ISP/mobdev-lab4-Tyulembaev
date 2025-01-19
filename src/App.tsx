import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CATApi from './shared/api';

import './App.css'

function App() {

    const [catImageUrl, setCatImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Функция для получения URL картинки
    const fetchCatImage = async () => {
      try {
        setLoading(true);
        const cat = await CATApi.GetRandomCat();
        const imageUrl = await CATApi.GetPhotoOfCat(cat._id);
        console.log(imageUrl);
        setCatImageUrl(imageUrl);
      } catch (err) {
        setError("Не удалось загрузить картинку.");
      } finally {
        setLoading(false);
      }
    };

    fetchCatImage();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {catImageUrl && <img src={catImageUrl} width='200px' height='200px' alt="Random Cat" />}
      <button onClick={() => window.location.reload()}>Обновить</button>
    </div>
  );
}

export default App
