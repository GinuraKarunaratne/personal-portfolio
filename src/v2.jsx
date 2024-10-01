import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./v2.css";

function App() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(true);
    const [email, setEmail] = useState("");
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

        window.addEventListener("mousemove", handleMouseMove);

        // Disable scroll on mount
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timeoutId);
            // Re-enable scroll on unmount
            document.body.style.overflow = "auto";
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
            alert("Please enter a valid email.");
        }
    };

    const scrollToProjects2 = () => {
        document.getElementById("projects-section2").scrollIntoView({
            behavior: "smooth",
        });
    };

    const scrollToProjects = () => {
        document.getElementById("projects-section").scrollIntoView({
            behavior: "smooth",
        });
    };

    const scrollToTop = () => {
        document.getElementById("top-section").scrollIntoView({
            behavior: "smooth",
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

            <div id="top-section" className="p1">
                <h1>Ginura Karunaratne</h1>
                <div className="arrow-container" onClick={scrollToProjects}>
                    <span className="view-projects-text">View Projects</span>
                    <span className="arrow">↓</span>
                </div>

                <div className="btm-line">
                    <a id="tags" href="https://github.com/GinuraKarunaratne">
                        GitHub
                    </a>
                    <a id="tags" href="https://linkedin.com/in/ginurakarunaratne">
                        LinkedIn
                    </a>
                    <a id="tags" href="https://instagram.com/ginurakarunaratne">
                        Instagram
                    </a>

                    <div className="email-container">
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
                <button className="go-back-button" onClick={scrollToTop}>
                    ↑
                </button>
                <button className="academics-button" onClick={scrollToProjects2}>
                    Explore More
                </button>
                <p>Project Showcase</p>

                <div className="projects-showcase">
                    <div className="project-card">
                        <h3>Modern ATM UI Design</h3>
                        <h5>2023</h5>
                        <a
                            href="https://www.figma.com/community/file/1295988419710742075/atm-ui-design-animated"
                            className="view-project-button"
                        >
                            <i className="fab fa-figma"></i>
                        </a>

                        <div className="text-container">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    window.location.href =
                                        "https://www.figma.com/community/file/1295988419710742075/atm-ui-design-animated";
                                }}
                            >
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
                        <h5>2023</h5>
                        <a
                            href="https://www.figma.com/community/file/1322540885974936456/modern-taxi-booking-system-ui"
                            className="view-project-button"
                        >
                            <i className="fab fa-figma"></i>
                        </a>

                        <div className="text-container">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    window.location.href =
                                        "https://www.figma.com/community/file/1322540885974936456/modern-taxi-booking-system-ui";
                                }}
                            >
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
                        <h3>Sales Data Analyzer</h3>
                        <h5>2024</h5>
                        <a
                            href="https://github.com/GinuraKarunaratne/sales-data-analyzer"
                            className="view-project-button"
                        >
                            <i className="fab fa-python"></i>
                        </a>

                        <div className="text-container">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    window.location.href =
                                        "https://github.com/GinuraKarunaratne/sales-data-analyzer";
                                }}
                            >
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
                        <h3>Photography Showcase & Upload Website</h3>
                        <h5>2023</h5>
                        <a
                            href="https://github.com/GinuraKarunaratne/photo-showcase-site"
                            className="view-project-button"
                        >
                            <i className="fab fa-html5"></i>
                        </a>

                        <div className="text-container">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    window.location.href =
                                        "https://github.com/GinuraKarunaratne/photo-showcase-site";
                                }}
                            >
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

            <div id="projects-section2" className="academics-section">
                <button className="acad-back-button" onClick={scrollToProjects}>
                    ↑
                </button>

                <h1 className="academics-h">Personal Timeline</h1>

                <div className="academic-content" id="academic-content">
                    <ul className="timeline">
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2024 - Present</p>
                                <h3>BEng (Hons) Software Engineering</h3>
                                <h4>Ofqual Level 6, APIIT - (University of Staffordshire) (Reading)</h4>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2024 - 2025</p>
                                <h3>ABE UK - Diploma in Business Management</h3>
                                <h4>Ofqual Level 6, Business Management, ABE UK (Reading)</h4>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2022 - 2024</p>
                                <h3>PEARSON BTEC HIGHER NATIONAL DIPLOMA (HND) SOFTWARE ENGINEERING</h3>
                                <h4>Ofqual Level 5, ESOFT Metro Campus (July 2024) - Graduated with 9 Distinctions</h4>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2023 - 2024</p>
                                <h3>ABE UK - Diploma in Business Management</h3>
                                <h4>Ofqual Level 5, Business Management, ABE UK (Reading)</h4>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2021 - 2022</p>
                                <h3>DIPLOMA IN SOFTWARE ENGINEERING (DISE)</h3>
                                <h4>Software Engineering, ESOFT Metro Campus (June 2022)</h4>
                            </div>
                        </li>   
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2020</p>
                                <h3>GCE O/levels Completed</h3>
                                <h4>Private Candidate (2020/2021)</h4>
                            </div>
                        </li>
                        <li className="timeline-event">
                            <label className="timeline-event-icon"></label>
                            <div className="timeline-event-copy">
                                <p className="timeline-event-thumbnail">2009 - 2020</p>
                                <h3>Lyceum International School</h3>
                                <h4>Private Candidate (2020/2021)</h4>
                            </div>
                        </li>
                    </ul>
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
