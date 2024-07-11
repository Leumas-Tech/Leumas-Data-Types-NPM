import { useState, useEffect } from 'react';
import RandomDalleImage from './RandomDalleImages'; // Assuming RandomDalleImage class is in the same directory

const RandomDalleImageComponent = ({ apiKey, prompt, n, model, size }) => {
    const [randomDalleImage, setRandomDalleImage] = useState(new RandomDalleImage(apiKey, prompt, n, model, size));
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            await randomDalleImage.fetchImages();
            setImageUrls(randomDalleImage.getImageUrls());
        };
        fetchImages();
    }, [randomDalleImage]);

    return (
        <div>
            {imageUrls.length > 0 ? (
                imageUrls.map((url, index) => (
                    <img key={index} src={url} alt="DALL-E generated" style={{ width: '100%', height: 'auto' }} />
                ))
            ) : (
                <p>Loading images...</p>
            )}
        </div>
    );
};

export default RandomDalleImageComponent;
