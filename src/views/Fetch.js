import { useState, useEffect } from 'react';
import Axios from 'axios';

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('use effect');
    const fetchData = async () => {
      const { data } = await Axios.get('/api/images');
      setImages(data);
    }

    fetchData();
  }, [])

  return (
    <div className="page-fetch">
      <h2>Fetch Images</h2>
      {images.map((image, index) => 
        <div key={index}>
          <div className="image-wrapper">
            <img src={image.img} alt={image.title} />
          </div>
          <p>{image.title}</p>
        </div>
      )}
    </div>
  )
}

export default Images
