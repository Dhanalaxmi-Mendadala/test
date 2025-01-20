async function searchData(keyword) {
  try {
    const response = await fetch(`/api/search?keyword=${keyword}`, {
      method: 'GET',
      headers: { 'Content-Type': 'json' },
      mode: 'cors',
      credentials: 'include'
    });
    const data = await response.json();
    console.log(data, keyword,'121323e2')
    return data;
  } catch {
    return '1';
  }
};
export default searchData;