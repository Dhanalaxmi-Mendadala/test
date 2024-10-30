import "./welcomePage.css";
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

function SignInPage () {
  const CLIENT_ID = '7c902cf5c0915e0fed2a';
  const someContainer = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`
  return (
    <>
    <div className="popup">
      <p className="close">&times;</p>
      <h2 className= "welcomeBack">Welcome Back.</h2>
        <div className="signInGitHub"> <img src="/assets/github.png"></img><a href = {someContainer}>Sign in with GitHub</a></div>
    </div>
    </>
  )
}

export default WelcomePage;