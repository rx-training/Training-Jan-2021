import NumberList from "./NumberList.js"
import Blog from "./Blog.js"

const numbers = [1, 2, 3, 4, 5];

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


function App() {
  return (
    <section>
    <NumberList numbers={numbers} />
    <Blog posts={posts} />
    </section>
  );
}

export default App;
