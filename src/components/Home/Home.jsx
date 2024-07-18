import "./Home.css";

const Home = () => {
  return (
    <div className='home'>
        <h2>Trending <span>Blogs</span></h2>
        <div className="home-blogs">
          <div className="blog-card">
            <h3>My Blog</h3>
            <p>Written By <span>Author</span></p>
          </div>
          <div className="blog-card">
            <h3>My Blog</h3>
            <p>Written By <span>Author</span></p>
          </div>
          <div className="blog-card">
            <h3>My Blog</h3>
            <p>Written By <span>Author</span></p>
          </div>
          <div className="blog-card">
            <h3>My Blog</h3>
            <p>Written By <span>Author</span></p>
          </div>
          <div className="blog-card">
            <h3>My Blog</h3>
            <p>Written By <span>Author</span></p>
          </div>
        </div>
    </div>
  )
}

export default Home