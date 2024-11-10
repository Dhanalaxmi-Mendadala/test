const fetchCoverPage =  async(coverImageName) => {
  if (coverImageName === 'NULL') return null;
console.log(coverImageName)
  try {
    const response = await fetch(`http://localhost:8000/coverImage/${coverImageName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'image/png'
      },
      credentials: 'include'
    });
console.log(response, response['url'], 'after a fecth call of image')

    return response['url'];
  } catch {
    return null;
  }
};

export default fetchCoverPage;