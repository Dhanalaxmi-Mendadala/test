
// const AuthCallback = () => {
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const code = urlParams.get('code');
//         if (code) {
//             fetch(`http://localhost:8000/auth/callback?code=${code}`,
//                 { method: 'GET', })
//                 .then(response => response.json())
//                 .then(data => {
//                     if (data.status === 'success') {
//                         navigate('/dashboard');
//                     } else {
//                         setError('Login failed');
//                         navigate('/login');
//                     }
//                 })
//                 .catch(error => {
//                     setError('Error fetching access token');

//                     console.error('Error:', error);
//                 });
//         }
//     }, [navigate]);
//     return (<div> {error ? <p>{error}</p> : <p>Loading...</p>} </div>);
// };
// export default AuthCallback;