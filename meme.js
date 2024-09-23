document.getElementById('generate-meme').addEventListener('click', generateMeme);

function generateMeme() {
    fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];
            document.getElementById('meme-image').src = randomMeme.url;
        })
        .catch(error => console.error('Error fetching meme:', error));
}
