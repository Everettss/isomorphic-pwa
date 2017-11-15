import blog from './blog';

const renderBlog = data => {
    document.getElementById('app').innerHTML = blog(data);
};

setTimeout(() => {
    renderBlog();

    fetch('/posts')
        .then(res => res.json())
        .then(res => renderBlog(res));
}, 1000);
