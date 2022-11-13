import React from 'react'
// import css
import './Dash-board.css';
// import Bootstrap-css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap-js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';




function Dash() {

  const arrow = () => {
    let A = document.getElementById("dash");
    A.style.minWidth = "75px";
    A.style.maxWidth = "85px";
    A.style.backgroundColor = "Black"
    let B = document.getElementById("Right-arrow");
    B.style.opacity = "1";
    B.style.visibility = "visible"
    let C = document.getElementById("left-arrow");
    C.style.opacity = "0";
    C.style.visibility = "hidden"
  };
  const arrowlft = () => {
    let D = document.getElementById("dash");
    D.style.minWidth = " 300px";
    D.style.maxWidth = "340px";
    D.style.backgroundColor = "rgb(54, 1, 75)";
    let B = document.getElementById("Right-arrow");
    B.style.opacity = "0";
    B.style.visibility = "hidden";
    let C = document.getElementById("left-arrow");
    C.style.opacity = "1";
    C.style.visibility = "visible";
  };
  return (
    <div className="DashBoard" id="dash">
      <header className="fs-1 text fw-bold text-danger text-center p-3 header">
        qRec
      </header>
      <div className="container-fluid text-light">
        <button
          className="btn border-0  btn-outline-dark"
          id="left-arrow"
          onClick={arrow}
          type="button"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} ></FontAwesomeIcon>
        </button>
        <button
          className="btn border-0 btn-outline-dark "
          id="Right-arrow"
          onClick={arrowlft}
          type="button"
        >
          <FontAwesomeIcon icon={faArrowRightLong} ></FontAwesomeIcon>
        </button>
        <ul className="navbar-nav">
          <i className="fa fa-users navbar-brand nav-item d-inline p-2 mb-3 mt-4">
            &nbsp;&nbsp;
            <span className="nav-link d-inline" href="#">
              Staff Management
            </span>
          </i>
          <i className="fa fa-list-alt nav-item d-inline p-2 mb-3 mt-4">
            &nbsp;&nbsp;
            <span className="nav-link d-inline" href="#">
              Attendance Management
            </span>
          </i>
          <i className="fa fa-cog nav-item d-inline p-2 mb-3 mt-4 ">
            &nbsp;&nbsp;
            <span className="nav-link d-inline" href="#">
              Settings
            </span>
          </i>
          <i className="far fa-question-circle nav-item d-inline p-2 mb-3 mt-4">
            &nbsp;&nbsp;
            <span className="nav-link d-inline" href="#">
              SignOut
            </span>
          </i>
        </ul>
      </div>
      <div className="color1" />
      <div className="color2" />
    </div>

  )

}
export default Dash
