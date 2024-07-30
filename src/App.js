import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMarkdown, faTelegram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Carousel from './Carousel';
import logo from './myimg.jpg';
import img from './logo.png';

import mark1 from './marks/mark1.png'
import mark2 from './marks/mark2.png'
import mark3 from './marks/mark3.png'
import mark4 from './marks/mark4.png'
import mark5 from './marks/mark5.png'


import achiv1 from './achivs/achiv1.png'
import achiv2 from './achivs/achiv2.png'

import hahack from './projects/project_hahack.png'
import sb from './projects/project_sb.png'
import panth from './projects/project_panth.png'
import staking from './projects/project_staking.png'







// Компонент для отображения проекта
function Project({ title, description, url, imageUrl, githubUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="project-links">
        <a href={url} target="_blank" rel="noopener noreferrer" className="view-project">Посмотреть</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <i className="fab fa-github"></i> GitHub
        </a>
      </div>
    </div>
  );
}

// Компонент для страницы портфолио
function Portfolio() {
  const projects = [
    { title: 'XaXack', description: 'Cервис для оптимизации составления команд', url: 'http://45.147.177.227:5173/hackathons/user', imageUrl: hahack, githubUrl: "https://github.com/artemka-web3/prod_back_final"},
    { title: 'SkillBuddy', description: 'Телеграм бот в основе которого лежит LLM. Человек может учить грамматику, лексику языка с помощью тг-войсов или обычных сообщениий', url: 'https://t.me/SkillbuddyBot', imageUrl: sb, githubUrl: "https://github.com/arklual/angl_bot"  },
    { title: 'Pantheon', description: 'В $PANTHEON используется уникальная комбинация механизмов чеканки и сжигания. Эти механизмы обеспечивают рост цены только по отношению к $ETH. В этом проекте на мне лежал фронтенд и настройка взаимодействий с блокчейном', url: 'https://www.pantheon.gold/', imageUrl: panth, githubUrl: "https://github.com/artemka-web3/panth-front"  },
    { title: 'NFT Staking', description: 'Стейкинг NFT и получение награды в виде крипты (ERC-20)', url: 'https://nft-staking-blond.vercel.app/', imageUrl: staking, githubUrl: "https://github.com/artemka-web3/NFT-Staking"  },
  ];

  return (
    <>
      <h1>Мои проекты</h1>
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
    achiv1,
    achiv2
  ];

  const testimonialsPhotos = [
    mark1,
    mark2,
    mark3,
    mark4,
    mark5
  ];

  return (
    <div className="about-container">
      <div className="sidebar">
        <a href="#about-me">Обо Мне</a>
        <a href="#skills">Навыки</a>
        <a href="#experience">Достижения</a>
        <a href="#testimonials">Отзывы</a>
      </div>
      <div className="main-content">
        <div id="about-me" className="section">
            <h2>Обо мне</h2>
            <div className="about-container">
              <div className="about-content">
                <div className="about-photo square">
                  <img src={logo} alt="About Me" />
                </div>
                <div className="about-text">
                  <p>
                    Меня зовут Артем &#128075; 
                    <br/>
                    Мне 18 лет
                    <br/>
                    В данный момент работаю на бирже Kwork
                    <br/>
                    Увлекаюсь машинным обучением и хочу развиваться в этом направлении
                    <br/>
                    В основном занимаюсь backend-разработкой
                    <br/>
                    Люблю хакатоны и кейс-чемпионаты
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div id="skills" className="section">
          <h2>Навыки</h2>
          <div className="tags">
            <div className="tag">React.js</div>
            <div className="tag">Python 3</div>  
            <div className="tag">CSS</div>
            <div className="tag">HTML</div>
            <div className="tag">Django</div>
            <div className="tag">Django Rest Framework</div>
            <div className="tag">Solidity</div>
            <div className="tag">FastAPI</div>
            <div className="tag">Git</div>
            <div className="tag">Docker</div>
            <div className="tag">JavaScript</div>
            <div className="tag">Telegram Bots / Aiogram</div>
            <div className="tag">Web Scrapping (BeautifulSoup4, Selenium)</div>
            <div className="tag">Linux</div>
            <div className="tag">Web3.py</div>
            <div className="tag">ethers.js</div>
            <div className="tag">Langchain</div>
            <div className="tag">PostgreSQL</div>
            <div className="tag">SQLite</div>

          </div>
        </div>
        <div id="experience" className="section">
          <h2>Достижения</h2>
          <Carousel items={experiencePhotos} />
        </div>
        <div id="testimonials" className="section">
          <h2>Отзывы</h2>
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
        <NavLink exact to="/" activeClassName="active">Проекты</NavLink>
        <NavLink to="/about" activeClassName="active">Обо мне</NavLink>
      </div>
      <img src={img} alt="Profile" className="profile-picture" />
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
              <a href="https://t.me/sidnevart" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <a href="https://github.com/artemka-web3" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a href="mailto:artemkasidnev.web3@gmail.com">artemkasidnev.web3@gmail.com</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
