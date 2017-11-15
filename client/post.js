const post = data => `
    <article>
        <div class="article__header">
            <img class="article__avatar" src="${data.avatar}">
            <div class="article__top">
                <h3 class="article__title">${data.title}</h3>
                <div class="article__date">${data.date}</div>
            </div>
        </div>
        <div class="article__teaser">${data.teaser}</div>
    </article>
`;

export default post;
