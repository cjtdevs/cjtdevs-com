import BlogContainer from "components/BlogContainer/BlogContainer";
import { useState, Fragment } from "react";
import { useLocation } from "react-router";
import { attributes as blogContent } from "../../content/pages/blog.md";
import "./Blog.css";
export default function Blog() {
  const blogs = require.context("../../content/blogs", false, /\.md$/).keys();

  const searchBlog = useLocation().search?.replace("?post=", "./") + ".md";

  const [activePost, setActivePost] = useState(
    searchBlog === ".md" ? undefined : searchBlog
  );
  console.log(searchBlog, activePost);
  return (
    <div className="blog">
      <title>
        <h2>{blogContent.title}</h2>
      </title>
      {!activePost && (
        <section>
          <h5>{blogContent.subTitle}</h5>
        </section>
      )}
      <section>
        {blogs.length &&
        (!activePost ||
          (activePost && blogs.find((blog) => blog === activePost))) ? (
          blogs
            .sort((a, b) => a - b)
            .map((blog) => {
              return blog === activePost || !activePost ? (
                <Fragment>
                  <p>
                    <BlogContainer
                      buttonClick={(post) => {
                        setActivePost(post);
                      }}
                      isActive={blog === activePost}
                      fileName={blog.replace("./", "")}
                    />
                  </p>
                  <br /> <br /> <br />
                </Fragment>
              ) : null;
            })
        ) : activePost &&
          !blogs.find((blog) => blog !== activePost && !activePost === "") ? (
          <h1 style={{ marginBottom: "25%" }}>404 - Blog post not found</h1>
        ) : (
          <Fragment>
            <h3>Coming Soon!</h3>
            <p>
              Begining March 2022, you will be able find a quartley blog post
              here. Hope you check back then!
            </p>
          </Fragment>
        )}
      </section>
    </div>
  );
}
