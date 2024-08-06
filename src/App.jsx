// App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Resume from './components/Resume'
import BlogPostContent from './components/BlogPostContent';
import NotFound from './components/NotFound';

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/writing" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/posts/:slug" element={<BlogPostContent />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
