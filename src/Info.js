import logo from './logo.svg';
import './Info.css';

function Header () {
    return(
        <nav>
            <ul>
                <li className="Title"> <img src={logo} id="lil-logo"/>
                ReactFacts</li>
                <li>React Course - Project 1</li>
            </ul>
        </nav>
    )
}

export default Header;