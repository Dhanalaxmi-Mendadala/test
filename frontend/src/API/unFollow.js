export const unFollowAuthor = async (authorId) => {
    try {
      const response = await fetch(`http://localhost:8000/user/unfollow`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ 
          authorId: authorId
         }),
      });
      const data = await response.json();
      return data;
    } catch {
      return null;
    }
  };
  