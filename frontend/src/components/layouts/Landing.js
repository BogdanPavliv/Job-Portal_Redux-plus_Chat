import React from 'react'
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../../static/style.css";


const Landing = ({userVerified}) => {
    if(userVerified)
    {
      // console.log('hihihihih');
      return (<Redirect to='/dashboard'/>)
    }
    return (
      <div class="container1 jobs-push-hero__inner">
        <div className="dash-buttons">
      <Link to="/login" className="btn btn-light"
        ><i className="fa fa-sign-in text-primary" class="jobs-push-login-link rounded-link"></i>Увійти</Link>
        <br/>
      <Link to="/register" className="btn btn-light"
        ><i className=" text-primary"></i>Зареєструватися</Link>
    </div>      
    <h1 class="jobs-push-hero__headline">
      Анонімний пошук роботи на DevConnector
    </h1>

    <div class="wrapper1">
     <p class="text typewriter-animation"><span>Для </span>
     програмістів, тестувальників, DevOps, UX/UI дизайнерів, PM, всіх, хто працює в ІТ.
      </p>      
    </div>
    
    <div class="jobs-push-briefly">
     <div class="container">
       <p class="jobs-push-briefly__text">
          Ви описуєте бажану посаду та свої навички,
          а компанії пропонують вакансії. Після прийняття заявки, можете зв'язатися з рекрутером у спеціальному чаті - <a href='#'>DevConnectorChat</a> і домовитися про співбесіду.
      </p>
     </div>
    </div>
    </div>
    )
}
Landing.propTypes ={
  userVerified: PropTypes.bool,
};

const mapStateToProps = (State) => ({
  userVerified: State.authReducer.userVerified
});

export default connect(mapStateToProps)(Landing);