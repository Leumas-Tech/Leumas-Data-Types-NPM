class AskGPT {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async ask(prompt) {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: prompt }],
                max_tokens: 100
            })
        });

        const data = await response.json();
        return data.choices[0].message.content;
    }
}

export default AskGPT