import skeletonPost from './skeletonPost';
import post from './post';

const blog = data => `
    <header>
        <div class="container">
            Median - awesome blog
            <nav>
                <a href="#">here</a>
                <a href="#">should</a>
                <a href="#">be</a>
                <a href="#">navigation</a>
            </nav>
        </div>
    </header>
    <main class="container">
        <section>
            <h2>Newest articles</h2>
            ${
                data
                    ? data.map(postData => post(postData)).join('')
                    : Array.from(new Array(2))
                          .map(skeletonPost)
                          .join('')
            }
        </section>
        <aside>
            <img width="200" height="200" src="/logo.png">
            <h1>Welcome to Median</h1>
            A place to read stories that matter most to you.
            Every day, thousands of lorem writers share
            important stories on Median.
        </aside>
    </main>
`;

export default blog;
