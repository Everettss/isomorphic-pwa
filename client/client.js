import blog from './blog';

const renderBlog = () => {
    document.getElementById('app').innerHTML = blog();
};

setTimeout(() => {
    renderBlog();
}, 1000);
