import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutuser} from '../../actions/auth';
import {getUserProfile} from '../../actions/profile'
import PropTypes from 'prop-types';
import {getApplications} from '../../actions/applications';
import "../../static/style.css";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const NavM = ({logoutuser, auth, getApplications, getUserProfile}) => {
    const {userVerified, loading, user} = auth;
    const userNotLoggedIn = (
      <Fragment>
         <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
          <li className="navbar-item"><Link to="/register" className="nav-link">Реєстрація</Link></li>
          <li className="navbar-item"><Link to="/login" className="nav-link">Увійти</Link></li>
          </Nav>
        </Navbar.Collapse>                  
       </Navbar>
      </Fragment>
    );
    const userLoggedIn = (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {user && user.who === 'Applicant' ? <li className="navbar-item"><Link onClick = {getApplications} to="/myapplication" className="nav-link">Мої найми</Link></li>: <Fragment/>}
        {user && user.who === 'Recruiter' ? <li className="navbar-item"><Link  to="/successjob" className="nav-link">Співробітники</Link></li>: <Fragment/>}
        {/* {user && user.who === 'Recruiter' ? <li className="navbar-item"><Link  to="/applicants" className="nav-link">Applicants</Link></li>: <Fragment/>} */}
      <li className="navbar-item"><Link onClick = {getUserProfile} to="/profile" className="nav-link">Профіль</Link></li>
      <li className="navbar-item"><Link to="/dashboard" className="nav-link">Вакансії</Link></li>
      {/* <li className="navbar-item"><Link to="/chat" className="nav-link">Chat</Link></li> */}
      <li className="navbar-item"><Link to="/salary" className="nav-link">Зарплати</Link></li>
      <li className="navbar-item"><Link onClick = {logoutuser} to="/" className="nav-link"> <i className="fa fa-sign-out"></i> Вийти</Link></li>
         </Nav>
      </Navbar.Collapse>                  
      </Navbar>
      </Fragment>
      
    );
    return (
      <Fragment>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <h1>
        <Navbar.Brand>
        <Link to="/" className="nav-link"><i className="fas fa-code"></i> DevConnector</Link>
        </Navbar.Brand>
      </h1>     
      <ul>
        {
          (!loading && userVerified) ? (<Fragment>{userLoggedIn}</Fragment>) : (<Fragment>{userNotLoggedIn}</Fragment>) 
        }
      </ul>
      </Navbar>
      </Fragment>
    )
};

NavM.propTypes = {
  logoutuser: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
  getApplications: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps, {logoutuser, getApplications, getUserProfile})(NavM);