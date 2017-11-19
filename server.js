const express = require('express');
const app = express();
const getPosts = require('./server/getPosts');

import blog from './client/blog';

app.use(express.static('public'));

const html = data => `
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
    setTimeout(() => {
        const shell = typeof req.query.shell !== 'undefined';
        if (shell) {
            res.send(html());
        } else {
            getPosts(posts => {
                res.send(html(posts));
            });
        }
    }, 1000);
});

app.get('/posts', (req, res) => {
    getPosts(posts => {
        res.send(posts);
    });
});

app.listen(3000, () => console.log('App is running http://localhost:3000'));
