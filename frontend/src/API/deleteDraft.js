const deleteDraft = async (id) => {
  console.log(id, 'delete recieved for final API call')
  try {
    const response = await fetch(`http://localhost:8000/draft`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ draftId: id })
    })
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export default deleteDraft