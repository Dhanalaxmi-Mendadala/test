function LogoutPopUp () {
    return( 
      <>
      <div className="popupContainer">
        <p className="confirmationHeading">Are You Sure?</p>
        <div className="buttonsContainer">
          <button className="logout">Logout</button>
          <button className="cancel">Cancel</button>
        </div>
      </div>
      </>
    )
}
export default LogoutPopUp