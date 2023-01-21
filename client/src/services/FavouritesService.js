const baseURL = 'http://localhost:9000/api/favourites/';

const FavouritesService = {

    async getFavourites() {
        const res = await fetch(baseURL);
        return await res.json();
    },

    async addFavourites(favourite) {
        const res = await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(favourite),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    }
};

export default FavouritesService;