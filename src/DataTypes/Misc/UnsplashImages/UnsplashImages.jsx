class UnsplashImage {
    constructor(apiKey, prompt = 'nature') {
        this.apiKey = apiKey;
        this.prompt = prompt;
        this.imageUrl = null;
    }

    async fetchImage() {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?query=${this.prompt}&client_id=${this.apiKey}`);
            const data = await response.json();
            this.imageUrl = data.urls.regular;
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    }

    getImageUrl() {
        return this.imageUrl;
    }
}

export default UnsplashImage