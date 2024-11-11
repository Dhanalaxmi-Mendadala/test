import { useState } from "react";
import "./css/welcomePage.css";
import { useEffect } from "react";
import fetching from "./api";
import CLIENT_ID from "../clientInfo.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ click }) {
  return (
    <header id="welcomeHeader">
      <h1>Medium</h1>
      <nav>
        <p id="signin" onClick={() => click(true)}>
          Signin
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      const status = await fetching();
      if (status === null) {
        setError(true);
      } else {
        console.log(status);
        setIsLoggedIn(status);
        console.log(isLoggedIn);
      }
    };
    checkLoginStatus();
  }, []);
  if (error) {
    return (
      <h1 style={{ color: "red" }}>
        Error!404 Page Not FOUND..Connection Issue
      </h1>
    );
  }
  if (isLoggedIn) {
    console.log(isLoggedIn);
    navigate('/homepage');
  }
  else {
    return (
        <div>
          <Header click={setClicked} />
          {clicked && <SignInPage click={setClicked}></SignInPage>}
          <main id="welcomeBody">
            <h2>
              {isLoggedIn}
              Human <br /> Stories & Ideas
            </h2>
            <p>A place to read, write, and deepen your understanding</p>
          </main>
          <Footer></Footer>
        </div>
    );
  }
}
function Footer() {
  return (
    <>
      <footer id="welcomeFooter">
        <nav>
          <a href="#">help</a>
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
        <h2 className="welcomeBack">Welcome Back.</h2>
        <p className="signInGitHub">
          <img src="/assets/github.png"></img>
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
