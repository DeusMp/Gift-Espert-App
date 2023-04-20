const apiKey = 'Vy0u6cYjyhH6RORz0LEpnnhY8DzdF8NY';


export const getGifts = async (category) => {
    const endp = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=${apiKey}&q=${category}`;
    
    const resp = await fetch(endp);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}

