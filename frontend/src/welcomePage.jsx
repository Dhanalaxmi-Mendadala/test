import "./welcomePage.css";
import { useEffect } from "react";
function Header(){
    return (
    <header id="welcomeHeader">
    <h1 >Medium</h1>
    <nav>
      <a id="signin">Sign in</a>
    </nav>
    </header>
    );
}
function WelcomePage(){
 return (
    <>
    <Header/>
    <main id="welcomeBody">
      <h2>
       Human <br/> Stories & Ideas
      </h2>
      <p>A place to read, write, and deepen your understanding</p>
    </main>
    <Footer></Footer>
    </>
 )
}
function Footer () {
  return (
    <>
      <footer id="welcomeFooter">
    <nav>
    <a href="#">Help</a>
    <a href="#">About</a>
    <a href="#">Privacy</a>
    </nav>
      </footer>
      <SignInPage></SignInPage>
    </>
  )
}

// async function handleLogin () {
//   const CLIENT_ID = '7c902cf5c0915e0fed2a';
//   try {
//     const response = await axios.get(authUrl);
//     console.log(response)
//   }
//   catch {
//     console.log('Error')
//   }
// }

function SignInPage () {
  const CLIENT_ID = '7c902cf5c0915e0fed2a';
  const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get("code");
    
    console.log(window.location);

    if (code) {
      window.location.href = "http://localhost:5173/DashBoard";
    }
  }, [window.location]);
  return (
    <>
    <div className="popup">
      <p className="close">&times;</p>
      <h2 className= "welcomeBack">Welcome Back.</h2>
        <div className="signInGitHub"> <img src="/assets/github.png"></img><a href= {authUrl}>Sign in with Github</a></div>
    </div>
    </>
  )
}

export default WelcomePage;