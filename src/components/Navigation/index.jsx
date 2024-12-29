import { Link, useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navigation = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className="flex-row">
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/" >
                        {capitalizeFirstLetter('about me')}
                    </Link>
                </li>
                <li className={location.pathname === '/portfolio' ? 'active' : ''}>
                    <Link to="/portfolio">
                        {capitalizeFirstLetter('portfolio')}
                    </Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to="/contact">
                        {capitalizeFirstLetter('contact')}
                    </Link>
                </li>
                <li className={location.pathname === '/resume' ? 'active' : ''}>
                    <Link to="/resume">
                        {capitalizeFirstLetter('resume')}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;