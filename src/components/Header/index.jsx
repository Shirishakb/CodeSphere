import { useState } from 'react';

const Header = () => {
    const [activeSection, setActiveSection] = useState('About Me');
    return (
        <header className="flex-row space-between px-1">
            <h1>Shirisha Korukonda Bhattaru</h1>
            <nav>
                <ul>
                    <li 
                        className={activeSection === 'About Me' ? 'active' : ''} 
                    >
                        <a href="/" onClick={() => setActiveSection('About Me')}>About Me</a>
                    </li>
                    <li 
                        className={activeSection === 'Portfolio' ? 'active' : ''} 
                    >
                        <a href="/portfolio" onClick={() => setActiveSection('Portfolio')}>Portfolio</a>
                    </li>
                    <li 
                        className={activeSection === 'Contact' ? 'active' : ''} 
                    >
                        <a href="/contact" onClick={() => setActiveSection('Contact')}>Contact</a>
                    </li>
                    <li 
                        className={activeSection === 'Resume' ? 'active' : ''} 
                    >
                       <a href="/resume" onClick={() => setActiveSection('Resume')}>Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;