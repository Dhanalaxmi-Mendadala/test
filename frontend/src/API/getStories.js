async function getStories() {
  try {
    const response = await fetch("http://localhost:8000/user/stories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data,"Stories");
    return data;
  } catch (error) {
    console.error("Error fetching stories:", error);
    return null;
  }
}
export default getStories;
