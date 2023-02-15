import './BizCard.css';
import insta from './instagram.png';
import github from './github.png';
import smile from './smile.jpg';

function Info () {
    return (
        <div className="info">
            <img src={smile}/>
            <h1>Lucas Harrison</h1>
            <h2>React Learner</h2>
            <h3>lucas.com</h3>
            <div className="buttons">
                <div id="email">Email</div>
                {/* <div>Not Email</div> */}
            </div>
        </div>
    )
}

function About () {
    return (
        <div className="about">
            <h2>About</h2>
            <p>I am a guy making a little React
                project. It's just a static page,
                but it's a step in the right direction.
                Soon I will have a powerful framework at 
                my fingertips!
            </p>
        </div>
    )
}

function Interests () {
    return (
        <div className="interests">
            <h2>Interests</h2>
            <p>Homebrew hand. Homebrew sampler.
                Homebrew enjoyer. Coffee Drinker.
                Other adjectives. Smooth. Sultry. Maybe not
                sultry..
            </p>
        </div>
    )
}

function Footer () {
    return (
        <div className="socials">
            <a href="https://www.google.com" target="_blank"> <img src={insta}/></a>
            <a href="https://www.google.com" target="_blank"><img src={github}/></a>
        </div>
    )
}

function Card () {
    return (
        <div id="Card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default Card;