class GPTConversation {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.messages = [];
    }

    async sendMessage(prompt) {
        this.messages.push({ role: 'user', content: prompt });

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: this.messages,
                max_tokens: 150
            })
        });

        const data = await response.json();
        const reply = data.choices[0].message.content;
        this.messages.push({ role: 'assistant', content: reply });

        return reply;
    }

    getConversation() {
        return this.messages;
    }
}

export default GPTConversation