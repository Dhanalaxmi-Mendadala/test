const fetchUserDashboard = async () => {
    try {
      const response = await fetch("http://localhost:8000/user/dashboard", {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data, 'home page')
      return data;
    } catch {
      return null;
    }
  };
  export default fetchUserDashboard;