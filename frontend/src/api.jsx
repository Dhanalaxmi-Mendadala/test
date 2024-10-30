async function fetching(){
    try {
        const response = await fetch('http://localhost:8000/isLoggedIn',{
          method: 'GET', // HTTP method
          headers: { 'Content-Type': 'json'},
          mode:'cors'
    
        });
        console.log("Fetch Successfully");
        console.log(response);
        const data=await response.json();
      console.log(data);
      } catch (error) {
        console.log(error);
      }};
export default fetching;