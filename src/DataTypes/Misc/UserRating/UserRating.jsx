class UserRating {
    constructor(ratings = []) {
        this.ratings = ratings;
    }

    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this.ratings.push(rating);
        } else {
            throw new Error('Rating must be between 1 and 5');
        }
    }

    getAverageRating() {
        const total = this.ratings.reduce((acc, rating) => acc + rating, 0);
        return total / this.ratings.length;
    }
}
export default UserRating
// Usage
// const userRating = new UserRating([5, 4, 3, 4]);
// userRating.addRating(5);
// console.log(userRating.getAverageRating()); // 4.2
