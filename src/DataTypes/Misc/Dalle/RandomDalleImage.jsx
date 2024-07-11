class RandomDalleImage {
    constructor(apiKey, prompt = 'a beautiful landscape', n = 1, model = 'dall-e-2', size = '1024x1024') {
        this.apiKey = apiKey;
        this.prompt = prompt;
        this.n = n;
        this.model = model;
        this.size = size;
        this.imageUrls = [];
    }

    async fetchImages() {
        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: this.prompt,
                    n: this.n,
                    model: this.model,
                    size: this.size
                })
            });
            const data = await response.json();
            this.imageUrls = data.data.map(image => image.url);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }

    getImageUrls() {
        return this.imageUrls;
    }
}

export default RandomDalleImage