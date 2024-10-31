import DashBoard from './DashBoard';
import { useNavigate } from 'react-router-dom';
import "./homepage.css";
function HomePage() {
    return (<><Header />
        <DashBoard />
    </>
    )
}
function Header() {
    const navigate=useNavigate();
    return (<div id="Homeheader">
        <h1>Medium</h1>
        <div>
        <button onClick={()=>navigate('/homepage/addstory')}>Write</button>
        <h3>Profile</h3>
        </div>
    </div>
    );
}
export default HomePage;