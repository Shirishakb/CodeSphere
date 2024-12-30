import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
return (
    <Navbar expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
                        {capitalizeFirstLetter('About')}
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/portfolio" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
                        {capitalizeFirstLetter('Portfolio')}
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
                        {capitalizeFirstLetter('Contact')}
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/resume" className={({ isActive }) => (isActive ? 'active mx-2' : 'mx-2')}>
                        {capitalizeFirstLetter('Resume')}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
};

export default Navigation;
