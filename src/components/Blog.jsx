import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

function BlogPost({ title, description, date, readingTime }) {
  const slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  return (
    <Link to={`/posts/${slug}`} className="blog-post-link">
      <div className="blog-post">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
        <div className="blog-meta">
          <span className="blog-date">{date}</span>
          <span className="blog-reading-time">{readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}

function Blog() { // need to stop it from 404ing before seeing the actual post. figure out how to display md.
  const blogPosts = [
    {
      title: "Creating and Defeating Hexhunt",
      description: "Optimizing a word game: Explaining solutions to my HackMIT admissions puzzle.",
      date: "2024-08-17",
      readingTime: 16
    },
    // {
    //   title: "Lessons From AWS",
    //   description: "What I learned from my internship at the cloud giant.",
    //   date: "2024-08-20",
    //   readingTime: 10
    // },
    {
      title: "Hello World",
      description: "My first blog post! On writing and originality.",
      date: "2024-08-01",
      readingTime: 3
    }
  ];

  return (
    <div className="blog">
      <h2>Blog</h2>
      {/* <div>
        Coming soon!
      </div> */}
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
