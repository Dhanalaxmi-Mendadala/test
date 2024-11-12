const deleteDraft = (id) => {
    console.log(id,'delete draft called')
    fetch(`http://localhost:8000/draft`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            draftId : id
        })
    })
    .then((data) => {
        console.log(data)
        return data.json()
    })
    .then((data) => {
        console.log(data)
    })
}
export default deleteDraft