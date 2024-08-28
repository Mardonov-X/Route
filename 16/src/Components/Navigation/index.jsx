import { Link, Outlet } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </nav>
            {/* Здесь будут отображаться страницы */}
            <Outlet />
        </div>
    );
}

export default Navigation;
