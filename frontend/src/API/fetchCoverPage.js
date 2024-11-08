const fetchCoverPage = async (imageName) => {
  try {
    const response = await fetch(`http://localhost:8000/coverImage/${imageName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'image/png'
      },
      credentials: 'include'
    });
    return response['url'];
  } catch {
    return null
  }
};
