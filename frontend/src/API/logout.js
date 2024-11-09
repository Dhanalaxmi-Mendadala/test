const mainLogout = () => {
    fetch('http://localhost:8000/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    })
    .then((data) => {
        return data;
    })
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        console.log(data)
    })
}
export default mainLogout