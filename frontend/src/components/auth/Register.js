import React from 'react';
import {Fragment , useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {setalert} from '../../actions/alert';
import { registeruser } from '../../actions/auth';
import PropTypes from 'prop-types';
import "../../static/style.css"


export const Register = ({setalert, registeruser, isUserVerified, user}) => {

    const [registerdata, setregisterdata] = useState({
      who: '',
      name: '',
      email: '',
      password: '',
      password2: ''
    });
    const {who , name , email, password, password2} = registerdata;

    const onChange = (e) => {
      // console.log(e.target.value);
      setregisterdata({ ...registerdata, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      if(password !== password2)
      {
        setalert("Passwords donot match", 'danger');
        // console.log('Hi');
      }
      else if (who !== 'Applicant' && who !== 'Recruiter')
      {
        setalert("Please select your role", 'danger');
        // console.log("Nothing is selected");
      }
      else{
        registeruser({name, email, who, password});
      }
    }
    if(isUserVerified && user)
    {
      return (
        <Redirect to='/profile'></Redirect>
      );
    }
    return (
        <Fragment>
          <main>
          <section class="right-container">
          <div class="content"> 
        <h3 class="sign-in-text">Зареєструватися</h3>
      <p><i></i> Створити свій обліковий запис</p>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select class="custom-select" name="who" value={who} onChange={e => onChange(e)} required>
       <option selected>Який варіант найкраще описує вас</option>
        <option value="Applicant">Кандидат</option>
        <option value="Recruiter">Рекрутер</option>
</select>
</div>
        
        <div class="input-container">
          <input type="text" className="form-control" placeholder="Ви кандидат - введіть посаду,рекрутер - ім'я " name="name" class="name-input" id="name" value={name} onChange={e => onChange(e)} required />
          <svg width="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM12 14.5C13.46 14.5 16.93 15.09 18.36 16.83C19.38 15.49 20 13.82 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12C4 13.82 4.62 15.49 5.64 16.83C7.07 15.09 10.54 14.5 12 14.5ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM10.5 9.5C10.5 10.33 11.17 11 12 11C12.83 11 13.5 10.33 13.5 9.5C13.5 8.67 12.83 8 12 8C11.17 8 10.5 8.67 10.5 9.5Z"
                                fill="black" fill-opacity="0.36" />
                        </svg>
        </div>
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
            class="password-input"
            id="password"
            name="password"
            minLength="6"
            required
            value={password} onChange={e => onChange(e)}
          />
          <svg width="20" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                 d="M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.9 22.5 4 21.6 4 20.5V10.5C4 9.4 4.9 8.5 6 8.5H7V6.5C7 3.74 9.24 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
                  fill="black" fill-opacity="0.36" />
            </svg>
        </div>
        <div class="input-container">
          <input
          className="form-control"
            type="password"
            placeholder="Підтвердити пароль"
            id="confirm-password"
            class="confirm-password-input"
            name="password2"
            minLength="6"
            required
            value={password2} onChange={e => onChange(e)}
          />
          <svg width="20" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M17 8.5H18C19.1 8.5 20 9.4 20 10.5V20.5C20 21.6 19.1 22.5 18 22.5H6C4.9 22.5 4 21.6 4 20.5V10.5C4 9.4 4.9 8.5 6 8.5H7V6.5C7 3.74 9.24 1.5 12 1.5C14.76 1.5 17 3.74 17 6.5V8.5ZM12 3.5C10.34 3.5 9 4.84 9 6.5V8.5H15V6.5C15 4.84 13.66 3.5 12 3.5ZM6 20.5V10.5H18V20.5H6ZM14 15.5C14 16.6 13.1 17.5 12 17.5C10.9 17.5 10 16.6 10 15.5C10 14.4 10.9 13.5 12 13.5C13.1 13.5 14 14.4 14 15.5Z"
                                fill="black" fill-opacity="0.36" />
                        </svg>
        </div>
        <input type="submit" className="btn btn-primary" value="Реєстрація" class="sign-btn"/>
      </form>
      <p className="my-1">
      Вже є аккаунт? <Link to="/Login">Увійти</Link>
      </p>
      </div>
      </section>
     </main>
        </Fragment>
    )
}

Register.propTypes = {
  setalert: PropTypes.func.isRequired,
  registeruser: PropTypes.func.isRequired,
  isUserVerified: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isUserVerified: state.authReducer.userVerified,
  user: state.authReducer.user
});


export default connect(mapStateToProps, {setalert, registeruser})(Register);