import { useState } from "react";
import "./welcomePage.css";
function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <header id="welcomeHeader">
      <h1 >Medium</h1>
      <nav>
        <p id="signin" onClick={() => setClicked(true)}>Sign in</p>
      </nav>
      {clicked && <SignInPage setClicked={setClicked}></SignInPage>}
    </header>
  );
}
function WelcomePage() {
  return (
    <>
      <Header />
      <main id="welcomeBody">
        <h2>
          Human <br /> Stories & Ideas
        </h2>
        <p>A place to read, write, and deepen your understanding</p>
      </main>
      <Footer></Footer>
    </>
  )
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
  )
}
function SignInPage({setClicked}) {
  return (
    <>
      <div className="popup">
        <p className="close" onClick={() =>setClicked(false)}>&times;</p>
        <h2 className="welcomeBack">Welcome Back.</h2>
        <p className="signInGitHub" onClick={() => {
          const clientId = '7c902cf5c0915e0fed2a'; // Replace with your GitHub Client ID
          const scope = 'read:user user:email'; // The permissions your app requires
          const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`;
          window.location.href = githubAuthUrl;
          console.log(window.location);
        }
        }> <img src="/assets/github.png"></img>Sign in with GitHub</p>
      </div>
    </>
  )
}

export default WelcomePage;