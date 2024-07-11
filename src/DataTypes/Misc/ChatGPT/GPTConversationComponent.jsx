import React, { useState } from 'react';
import GPTConversation from './GPTConversation'; // Assuming GPTConversation class is in the same directory

const GPTConversationComponent = ({ apiKey }) => {
    const [conversation, setConversation] = useState(new GPTConversation(apiKey));
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleSendMessage = async () => {
        const reply = await conversation.sendMessage(prompt);
        setResponse(reply);
        setPrompt('');
    };

    return (
        <div>
            <h3>GPT Conversation</h3>
            <div style={{ maxHeight: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
                {conversation.getConversation().map((msg, index) => (
                    <div key={index} style={{ textAlign: msg.role === 'user' ? 'left' : 'right' }}>
                        <p><strong>{msg.role === 'user' ? 'You' : 'GPT'}:</strong> {msg.content}</p>
                    </div>
                ))}
            </div>
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Send a message..." 
                style={{ width: '80%' }} 
            />
            <button onClick={handleSendMessage} style={{ width: '18%' }}>Send</button>
            <div>
                <p><strong>Last response:</strong> {response}</p>
            </div>
        </div>
    );
};

export default GPTConversationComponent;
