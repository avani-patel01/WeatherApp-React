import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" style={{color:"#3c4048"}} to="#">Weather <i className="fa-solid fa-cloud" style={{color:"#81c6e8"}}></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home <i className="fa-solid fa-house"></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Weather">Weather <i className="fa-solid fa-cloud"></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
