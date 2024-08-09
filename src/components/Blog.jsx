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

function Blog() {
  const blogPosts = [
    // {
    //   title: "Creating and Defeating Hexhunt",
    //   description: "In search of the best Word Hunt board. Explaining solutions to my HackMIT admissions puzzle.",
    //   date: "2024-08-20",
    //   readingTime: 10
    // },
    // {
    // title: "Lessons From My Time at AWS",
    // description: "What I learned from the cloud giant.",
    // date: "2024-08-20",
    // readingTime: 10
    // },
    // {
    //   title: "Hello World",
    //   description: "My first post!",
    //   date: "2024-07-23",
    //   readingTime: 6
    // },
  ];

  return (
    <div className="blog">
      <h2>Writing</h2>
      <div>
        Coming soon!
      </div>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Blog;


