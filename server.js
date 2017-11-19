const express = require('express');
const app = express();
const getPosts = require('./server/getPosts');

app.use(express.static('public'));

const html = () => `
    <!DOCTYPE html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <html>
        <body>
            <div id="app">
                <div class="loading">loading</div>
            </div>
            <script src="script.js"></script>
            <script>
                if ('serviceWorker' in navigator) {
                    window.addEventListener('load', () => {
                        navigator.serviceWorker.register('/sw.js');
                    });
                }
            </script>
        </body>
    </html>
`;

app.get('/', (req, res) => {
    setTimeout(() => {
        res.send(html());
    }, 1000);
});

app.get('/posts', (req, res) => {
    getPosts(posts => {
        res.send(posts);
    });
});

app.listen(3000, () => console.log('App is running http://localhost:3000'));
