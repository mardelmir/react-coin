import { Link } from 'react-router-dom';

function Header (){
    return (
        <header>
            <nav>
                <Link key="home" to="/">Home: top coins</Link>
                <Link key="favorites" to="/favorites">Favorites</Link>
            </nav>
        </header>
    )
}

export default Header