import { useState } from "react";
import "../css/Welcome.css";
import CLIENT_ID from "../../clientInfo.jsx";
import PropTypes from "prop-types";
import IntroPicture from "../components/svg/welcome-image.webp"

function Header({ click }) {
  return (
    <header id="welcomeHeader">
      <h1>Medium</h1>
      <nav>
        <p id="signin" onClick={() => click(true)}>
          Get Started
        </p>
      </nav>
    </header>
  );
}
Header.propTypes = {
  click: PropTypes.func.isRequired,
};

function WelcomePage() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <Header click={setClicked} />
      {clicked && <SignInPage click={setClicked}></SignInPage>}
      <div>
        <main id="welcomeBody">
          <div className="intro">
            <h2>
              Human <br /> Stories & Ideas
            </h2>
            <p>A place to read, write, and deepen your understanding</p>
          </div>
          <img src={IntroPicture} alt="welcome-image" />
        </main>
        <button onClick={() => setClicked(true)}
          className="start-button">Start Reading</button>
      </div>
      <Footer></Footer>
    </div>
  );
}

function Footer() {
  return (
    <>
      <footer id="welcomeFooter">
        <nav>
          <a href="#">Help</a>
          <a href="#">About</a>
          <a href="#">Privacy</a>
        </nav>
      </footer>
    </>
  );
}

function SignInPage({ click }) {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
  return (
    <div id="signIn" onClick={() => click(false)}>
      <div className="popup">
        <p className="close" onClick={() => click(false)}>
          &times;
        </p>
        <h2 className="welcomeBack">Sign In</h2>
        <p className="signInGitHub">
          <img src="../../assets/github.png"></img>
          <a href={githubAuthUrl}>Sign in with GitHub</a>
        </p>
      </div>
    </div>
  );
}
SignInPage.propTypes = {
  click: PropTypes.func.isRequired,
};

export default WelcomePage;
