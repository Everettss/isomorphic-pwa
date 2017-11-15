const express = require('express');
const app = express();
const getPosts = require('./server/getPosts');

import blog from './client/blog';

app.use(express.static('public'));

const html = (blog, data) => `
    <!DOCTYPE html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>
    <html>
        <body>
            <div id="app">${blog(data)}</div>
            <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(data)}
            </script>
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
    const shell = typeof req.query.shell !== 'undefined';
    getPosts(posts => {
        res.send(html(blog, shell ? false : posts));
    });
});

app.get('/posts', (req, res) => {
    getPosts(posts => {
        res.send(posts);
    });
});

app.listen(3000, () => console.log('App is running http://localhost:3000'));
