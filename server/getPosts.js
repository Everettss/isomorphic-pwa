const faker = require('faker');

const makePost = () => ({
    avatar: faker.image.avatar(),
    title: faker.lorem.sentence(),
    date: `${faker.date.recent()}`,
    teaser: faker.lorem.paragraph(),
});

const getPosts = cb => {
    setTimeout(() => {
        const posts = Array.from(new Array(5)).map(makePost);
        cb(posts);
    }, 1000);
};

module.exports = getPosts;
