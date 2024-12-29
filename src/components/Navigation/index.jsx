import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Navigation = () => {
    return (
        <nav>
            <ul className="flex-row">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        {capitalizeFirstLetter('About')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
                        {capitalizeFirstLetter('Portfolio')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                        {capitalizeFirstLetter('Contact')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
                        {capitalizeFirstLetter('Resume')}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
