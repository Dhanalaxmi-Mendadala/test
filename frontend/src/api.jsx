async function fetching(){
    try {
        const response = await fetch('http://localhost:8000/isLoggedIn',{
          method: 'GET', // HTTP method
          headers: { 'Content-Type': 'json'},
          mode:'cors',
          credentials:"include",
        });

        const data=await response.json();
        return data.isLoggedIn;
      } catch (error) {
        return null;
      }};
export default fetching;