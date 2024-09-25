import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Disable scroll on mount
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
      // Re-enable scroll on unmount
      document.body.style.overflow = 'auto';
    };
  }, []);

  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      setIsValidEmail(true);
      window.location.href = `mailto:iamginurakarunaratne@gmail.com?subject=Contact&body=Email: ${email}`;
    } else {
      setIsValidEmail(false);
      alert('Please enter a valid email.');
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects-section').scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    document.getElementById('top-section').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          top: `${position.y}px`,
          left: `${position.x}px`,
          opacity: isVisible ? 1 : 0,
        }}
      ></div>

      <div id="top-section" className='p1'>
        <h1>Ginura Karunaratne</h1>
        <div className="arrow-container" onClick={scrollToProjects}>
          <span className="view-projects-text">View Projects</span>
          <span className="arrow">↓</span>
        </div>

        <div className='btm-line'>
          <a id='tags' href="https://github.com/GinuraKarunaratne">GitHub</a>
          <a id='tags' href="https://linkedin.com/in/ginurakarunaratne">LinkedIn</a>
          <a id='tags' href="https://instagram.com/ginurakarunaratne">Instagram</a>

          <div className='email-container'>
            <form onSubmit={validateEmail}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">→</button>
            </form>
          </div>
        </div>
      </div>

      <div id="projects-section" className="projects-section">
        <button className="go-back-button" onClick={scrollToTop}>↑</button>
        <p>Project Showcase</p>

        {/* Flexbox container for project cards */}
        <div className="projects-showcase">
          <div className="project-card">
            <h3>Modern ATM UI Design</h3>
            <a href='https://www.figma.com/community/file/1295988419710742075/atm-ui-design-animated' className="view-project-button">
              <i className="fab fa-figma"></i>
            </a>

            <div className='text-container'>
              <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'https://www.figma.com/community/file/1295988419710742075/atm-ui-design-animated'; }}>
                <input
                  type="email"
                  placeholder="View Project"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly // Make the input field read-only
                />
                <button type="submit">→</button>
              </form>

            </div>

          </div>
          <div className="project-card">
            <h3>Modern Taxi Booking System UI</h3>
            <a href='https://www.figma.com/community/file/1322540885974936456/modern-taxi-booking-system-ui' className="view-project-button">
              <i className="fab fa-figma"></i>
            </a>

            <div className='text-container'>
              <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'https://www.figma.com/community/file/1322540885974936456/modern-taxi-booking-system-ui'; }}>
                <input
                  type="email"
                  placeholder="View Project"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly // Make the input field read-only
                />
                <button type="submit">→</button>
              </form>

            </div>
            
          </div>
        </div>

        <div
          className="custom-cursor"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            opacity: isVisible ? 1 : 0,
          }}
        ></div>
      </div>

    </>
  );
}

export default App;
