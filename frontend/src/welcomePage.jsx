import { useState } from "react";
import "./css/welcomePage.css";
import { useEffect } from "react";
import fetching from "./api";
// import CLIENT_ID from "../clientInfo.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// const CLIENT_ID = '7c902cf5c0915e0fed2a';
function Header({ click }) {
  const clickOpenFunction = () => {
    click(true);
  };
  return (
    <header id="welcomeHeader">
      <h1>Medium</h1>
      <nav>
        <p id="signin" onClick={clickOpenFunction}>
          Sign in
        </p>
      </nav>
    </header>
  );
}
Header.propTypes = {
  click: PropTypes.func.isRequired,
};
Header.propTypes = {
  click: PropTypes.func.isRequired,
};
function WelcomePage() {
  const [clicked, setClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = await fetching();
      if (status === null) {
        setError(true);
      } else {
        setIsLoggedIn(status);
      }
    };
    checkLoginStatus();
  }, []);
  if (isLoggedIn) {
    navigate("/homepage");
  }
  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        Error!404 Page Not FOUND..Connection Issue
      </h1>
    );
  } else {
    return (
      isLoggedIn === false && (
        <div>
          <Header click={setClicked} />
          {clicked && <SignInPage click={setClicked}></SignInPage>}
          <main id="welcomeBody">
            <h2>
              Human <br /> Stories & Ideas
            </h2>
            <p>A place to read, write, and deepen your understanding</p>
          </main>
          <Footer></Footer>
        </div>
      )
    );
  }
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
function SignInPage({click}) {
  const clickCloseFunction = () => {
    click(false);
  };
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=7c902cf5c0915e0fed2a`;
  return (
    <div id="signIn" onClick={clickCloseFunction}>
      <div id="signIn" onClick={clickCloseFunction}>
        <div className="popup">
          <p className="close" onClick={() => click(false)}>
            &times;
          </p>
          <h2 className="welcomeBack">Welcome Back.</h2>
          <p className="signInGitHub">
            <img src="/assets/github.png"></img>
            <a href={githubAuthUrl}>Sign in with GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

SignInPage.propTypes = {
  click: PropTypes.func.isRequired,
};

export default WelcomePage;
