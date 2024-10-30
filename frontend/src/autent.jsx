import { useState, useEffect } from "react";

const fetching = async () => {
    const response = await fetch('localhost:8000/isLoggedIn');
    const data = await response.json();
    return (data.isLoggedIn);
}

const Autentication = () => {
   const [loginFlag, setLoginFlag] = useState('')
    useEffect(() => {
        const isLoggedIn = fetching();
        setLoginFlag(isLoggedIn);
    }, [])
    return <>
    {
    loginFlag?<p>Login Successful<a href="#">Get Started</a></p>
    :
    <div>Loading</div>
       }   </>
}
export default Autentication;
