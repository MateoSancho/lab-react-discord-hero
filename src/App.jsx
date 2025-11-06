import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import backgroundImage from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <img className="logo"src={discordLogo} alt="Discord" />
          <button className="menu-btn">
            <img src={menuIcon} alt="Menu" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">IMAGINE A PLACE...</h1>
          <p className="hero-description">
            ...where you can belong to a school club, a gaming group, or a worldwide art community. 
            Where just you and a handful of friends can spend time together. A place that makes it 
            easy to talk every day and hang out more often.
          </p>
          
          <div className="hero-buttons">
            <button className="btn btn-download">
              Download for Windows
            </button>
            <button className="btn btn-browser">
              Open Discord in your browser
            </button>
          </div>
        </div>
        
        {/* Background Images */}
        <div className="hero-background">
          <img src={backgroundImage} alt="Background" className="background-image" />
          <div className="background-overlay"></div>
        </div>
      </section>
    </div>
  );
}

export default App;