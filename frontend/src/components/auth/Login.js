import React from 'react';
import {Fragment , useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { loginuser } from '../../actions/auth';
import PropTypes from 'prop-types';

import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/constants';
import { withRouter} from "react-router-dom";
import "../../static/style.css"

export const Login = ({loginuser, isUserVerified, user}) => {

    const [logindata, setlogindata] = useState({
        email: '',
        password: ''
      });
    const {email, password} = logindata;

    const onChange = (e) => {
      // console.log(e.target.value);
      setlogindata({ ...logindata, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      loginuser({email, password});
    }  
    if(isUserVerified && user)
    {
      return (
        <Redirect to='/dashboard'></Redirect>
      )
    }
    return (
        <Fragment>
    <main>

        <section class="right-container">
        <div class="content">                 
        <h3  class="sign-in-text">Увійти</h3>
      <p><i></i> Увійдіть у свій обліковий запис</p>
      <form onSubmit={e => onSubmit(e)}>
        
        <div class="input-container">
          <input type="email" className="form-control" placeholder="Email адреса" name="email" class="email-input" value={email} onChange={e => onChange(e)}/>
          <svg width="20" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 10.99L4 6H20ZM12 13L4 8V18H20V8L12 13Z"
                                fill="black" fill-opacity="0.36" />
                        </svg>
        </div>
        <div class="input-container">
          <input
          className="form-control"
            type="password"
            placeholder="Пароль"
            name="password"
            id="password"
            class="password-input"
            minLength="6"
            required
            value={password} 
            onChange={e => onChange(e)}
            />
            <svg width="20" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.9 22.5 4 21.6 4 20.5V10.5C4 9.4 4.9 8.5 6 8.5H7V6.5C7 3.74 9.24 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
                  fill="black" fill-opacity="0.36" />
            </svg>
        </div>
        <input type="submit" className="btn btn-primary" value="Увійти" class="sign-btn"/>
      </form>
      <p className="my-1">
      Немає облікового запису? <Link to="/Register">Зареєструватися</Link>
      </p>
      </div>
      </section>
  </main>
        </Fragment>
    )
}

Login.propTypes = {
  loginuser: PropTypes.func.isRequired,
  isUserVerified: PropTypes.bool,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  isUserVerified: state.authReducer.userVerified,
  user: state.authReducer.user
});

export default connect(mapStateToProps, {loginuser})(Login);