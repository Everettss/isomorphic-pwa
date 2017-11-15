import blog from './blog';

const renderBlog = data => {
    document.getElementById('app').innerHTML = blog(data);
};

setTimeout(() => {
    if (window.__PRELOADED_STATE__) {
        renderBlog(window.__PRELOADED_STATE__);
    } else {
        renderBlog();

        fetch('/posts')
            .then(res => res.json())
            .then(res => renderBlog(res));
    }
}, 1000);
