async function getResponses(storyId) {
  try {
    const response = await fetch(`/api/story/${storyId}/responses`, {
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
    console.log(data, "recieved responses");
    return data;
  } catch (error) {
    console.error("Error fetching responss:", error);
    return null;
  }
}
export default getResponses;
