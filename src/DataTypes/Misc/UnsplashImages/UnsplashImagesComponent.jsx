import React, { useState, useEffect } from 'react';
import RandomImage from './RandomImage'; // Assuming RandomImage class is in the same directory

const RandomImageComponent = ({ apiKey, prompt }) => {
    const [randomImage, setRandomImage] = useState(new RandomImage(apiKey, prompt));
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            await randomImage.fetchImage();
            setImageUrl(randomImage.getImageUrl());
        };
        fetchImage();
    }, [randomImage]);

    return (
        <div style={{ 
            width: '100%', 
            height: '100vh', 
            backgroundSize: 'cover', 
            backgroundImage: `url(${imageUrl})` 
        }}>
            {imageUrl ? null : <p>Loading image...</p>}
        </div>
    );
};

export default RandomImageComponent;



// import React from 'react';
// import RandomImageComponent from './RandomImageComponent';

// const App = () => {
//     const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY';
//     const prompt = 'landscape'; // Optional

//     return (
//         <div>
//             <RandomImageComponent apiKey={unsplashApiKey} prompt={prompt} />
//         </div>
//     );
// };

// export default App;
