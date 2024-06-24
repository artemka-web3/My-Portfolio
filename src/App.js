import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Carousel from './Carousel';

// Компонент для отображения проекта
function Project({ title, description, url, imageUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

// Компонент для страницы портфолио
function Portfolio() {
  const projects = [
    { title: 'Project 1', description: 'Description for project 1', url: 'https://example.com/project1', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Project 2', description: 'Description for project 2', url: 'https://example.com/project2', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Project 3', description: 'Description for project 3', url: 'https://example.com/project3', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Project 4', description: 'Description for project 4', url: 'https://example.com/project4', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Project 5', description: 'Description for project 5', url: 'https://example.com/project5', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Project 6', description: 'Description for project 6', url: 'https://example.com/project6', imageUrl: 'https://via.placeholder.com/300' },
    { title: 'Project 7', description: 'Description for project 7', url: 'https://example.com/project7', imageUrl: 'https://via.placeholder.com/300' },
  ];

  return (
    <>
      <h1>My Portfolio</h1>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </>

  );
}

function About() {
  const aboutMePhotos = [
    "https://via.placeholder.com/800x400.png?text=About+Me+Slide+1",
    "https://via.placeholder.com/800x400.png?text=About+Me+Slide+2",
    "https://via.placeholder.com/800x400.png?text=About+Me+Slide+3"
  ];

  const experiencePhotos = [
    "https://via.placeholder.com/800x400.png?text=Experience+Slide+1",
    "https://via.placeholder.com/800x400.png?text=Experience+Slide+2",
    "https://via.placeholder.com/800x400.png?text=Experience+Slide+3"
  ];

  const testimonialsPhotos = [
    "https://via.placeholder.com/800x400.png?text=Testimonial+Slide+1",
    "https://via.placeholder.com/800x400.png?text=Testimonial+Slide+2",
    "https://via.placeholder.com/800x400.png?text=Testimonial+Slide+3"
  ];

  return (
    <div className="about-container">
      <div className="sidebar">
        <a href="#about-me">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#testimonials">Testimonials</a>
      </div>
      <div className="main-content">
        <div id="about-me" className="section">
            <h2>About Me</h2>
            <div className="about-content">
              <div className="carousel-container">
                <Carousel items={aboutMePhotos} />
              </div>
              <div className="about-text">
                <p>
                  This is the about me section. Here you can describe yourself. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
                </p>
              </div>
            </div>
        </div>
        <div id="skills" className="section">
          <h2>Skills</h2>
          <div className="tags">
            <div className="tag">JavaScript</div>
            <div className="tag">React</div>  
            <div className="tag">CSS</div>
            <div className="tag">HTML</div>
            <div className="tag">Node.js</div>
          </div>
        </div>
        <div id="experience" className="section">
          <h2>Experience</h2>
          <Carousel items={experiencePhotos} />
        </div>
        <div id="testimonials" className="section">
          <h2>Testimonials</h2>
          <Carousel items={testimonialsPhotos} />
        </div>
      </div>
    </div>
  );
}

// Компонент для меню
function Menu() {
  return (
    <nav className="menu">
      <div>
        <NavLink exact to="/" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/about" activeClassName="active">About Me</NavLink>
      </div>
      <img src="https://via.placeholder.com/40" alt="Profile" className="profile-picture" />
    </nav>
  );
}

// Главный компонент приложения
function App() {
  return (
    <Router>
      <div className="container">
        <Menu />
        <Routes>
          <Route path="/" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <footer>
          <div className="contact">
            <div className="contact-item">
              <FontAwesomeIcon icon={faTelegramPlane} className="icon" />
              <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">My Telegram</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faTelegram} className="icon" />
              <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">My Telegram Channel</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a href="mailto:youremail@example.com">youremail@example.com</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
