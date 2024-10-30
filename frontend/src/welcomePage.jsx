import fetching from './api.jsx'
function Header(){
    return (
    <header>
    <h1>Medium</h1>
    <nav>
      <a onClick={()=>fetching()}>Sign in</a>
    </nav>
    </header>
    );
}
function WelcomePage(){
 return (
    <>
    <Header/>
    </>
 )
}

export default WelcomePage;