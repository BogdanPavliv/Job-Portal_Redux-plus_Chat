import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {} from '../../actions/jobs';
import moment from "moment";
import {Link} from 'react-router-dom';
// import deleteJob from '../../actions/jobs';
import "../../static/style.css"


const TemplateApplicant = ({jobs, applicationsjob}) => {
    jobs = jobs.filter((value)=>new Date(value.deadline).getTime() > new Date().getTime());
    const code = jobs.map(({
            title,
            applications,
            positions,
            recruiter_id: {name},
            deadline,
            skills,
            typeOfJob,
            duration,
            salary,
            status,
            date_of_posting,
            _id
        }) => <table className='table' key={_id}>
        {title ? 
<Fragment>
<li class="list-jobs__item">
         <div class="text-date pull-right">

         {moment(deadline).format('LL')}

        </div>
        <div class="list-jobs__title">
        <li><a class="profile" href="/jobs/308272-middle-node-js-developer/"><span>{title}</span></a> <span class="public-salary-item">${salary}</span></li>        
        </div>
</li>
    
</Fragment>
: 
<Fragment> </Fragment>}

{name ? 
<Fragment>
    <tr>
        <th>Name of recruiter</th>
        <td>{name}</td>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}


{deadline ? 
<Fragment>
    
        {/* <th>Deadline of application</th> */}
        <div class='list-jobs__details__info'>
        
        </div>
    
</Fragment>
: 
<Fragment> </Fragment>}
{salary ? 
<Fragment>
    
        {/* <th>salary</th> */}
        <span class="public-salary-item">
        
        </span>
    
</Fragment>
: 
<Fragment> </Fragment>}
{skills ? 
<Fragment>
   
        <li class="list-jobs__item">
        <div class="list-jobs__description"> 
        <li><p>{skills}</p></li> 
        </div>
        </li>
   
</Fragment>
: 
<Fragment> </Fragment>}

{typeOfJob ? 
<Fragment>
    
         <div class='list-jobs__details__info'>
        
        </div>
    
</Fragment>
: 
<Fragment> </Fragment>}

{duration ? 
<Fragment>
    <tr>
    <div class="list-jobs__details">
    <a href="#" class='picture'>
        <div class="recruiter-images-container">       
             <div id="" class="userpic-wrapper userpic-color_2 userpic_sm ">
                   <span class="userpic-initials">DevConnector</span>
                         <div class="userpic-image" ></div>
                 </div>
              </div>
          </a>
         <div class='list-jobs__details__info'>
        <li>Тривалість: {duration} Вакансія діє до: {moment(deadline).format('LLL')} Тип роботи: {typeOfJob}</li>
        
        </div>
        </div>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}
    <tr>
         { applicationsjob && applicationsjob.filter((value)=>  value.job_id === _id).length !== 0? <Fragment>
            <button className="btn btn-primary">Застосований</button>              
        </Fragment>
        :
        (status === 'Full' ? 
        <button className="btn btn-warning">Вакансія зайнята</button>
        : 
        <Link to={`/sop/${_id}`} className="btn btn-success">Відгукнутися</Link>
        )
    }

    </tr> 
    
</table>)
    return (
        <Fragment>
            <h2>Робота</h2>
            <div class="page-header">
                <h1>Вакансії на DevConnector

                {/* <small class="text-muted"> 26165</small> */}
                </h1>

  
             {/* <div class="jobs-filter"> */}
              {/* <h2 class="jobs-filter__title">Фільтри</h2> */}
              {/* <p>consider 0 in duration as indefinite.</p> */}
              {/* <div class="form-group">
               <label>Назва посади: </label>
               <input type="text" class="form-control"/>
              </div> */}
             {/* </div> */}
  
             </div>
            {code}
        </Fragment>
    );
}

TemplateApplicant.propTypes = {
    applicationsjob: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    applicationsjob: state.applications.applications
});
export default connect(mapStateToProps, null)(TemplateApplicant
);
