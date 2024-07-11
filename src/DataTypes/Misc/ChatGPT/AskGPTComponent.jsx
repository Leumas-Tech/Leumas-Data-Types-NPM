import React, { useState } from 'react';
import AskGPT from './AskGPT'; // Assuming AskGPT class is in the same directory

const AskGPTComponent = ({ apiKey }) => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const askGPT = new AskGPT(apiKey);

    const handleAsk = async () => {
        const result = await askGPT.ask(prompt);
        setResponse(result);
    };

    return (
        <div>
            <h3>Ask GPT</h3>
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Ask a question..." 
            />
            <button onClick={handleAsk}>Ask</button>
            <div>
                <p>Response: {response}</p>
            </div>
        </div>
    );
};

export default AskGPTComponent;




// import React from 'react';
// import AskGPTComponent from './AskGPTComponent';

// const App = () => {
//     const openaiApiKey = 'YOUR_OPENAI_API_KEY';

//     return (
//         <div>
//             <AskGPTComponent apiKey={openaiApiKey} />
//         </div>
//     );
// };

// export default App;
