import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import './BlogPostContent.css';
import NotFound from './NotFound';

function BlogPostContent() {
  const [content, setContent] = useState('');
  const { slug } = useParams();

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(response => response.text())
      .then(text => {
        if (text.trim().startsWith('<!doctype html>')) {
          throw new Error('Page Not Found');
        }
        setContent(text);
      })
      .catch(error => {
        console.error('Error loading blog post:', error);
        setContent('');
      });
  }, [slug]);

  if (!content) {
    return (
      <NotFound></NotFound>
    )
  }

  return (
    <div className="blog-post-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default BlogPostContent;
