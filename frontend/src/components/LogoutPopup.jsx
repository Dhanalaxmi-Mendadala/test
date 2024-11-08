import '../css/logoutPop.css'
import mainLogout from "../API/logout";


function LogoutPopUp ({logoutFlag, close}) {
    return(
        <>
      <div className= {logoutFlag ? "popupContainer" : "hidden"}>
        <p className='close' onClick={close} >&times;</p>
        <p className="confirmationHeading">Are You Sure?</p>
        <div className="buttonsContainer">
          <button className="logout" onClick = {() => {mainLogout();
              window.location.reload();
            }}>Logout</button>
          <button className="cancel" onClick={close}>Cancel</button>
        </div>
      </div>
      </>
    )
}
export default LogoutPopUp
    