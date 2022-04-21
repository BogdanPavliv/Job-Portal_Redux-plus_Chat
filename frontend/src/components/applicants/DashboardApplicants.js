import React , {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getApplications } from '../../actions/applications';
import { Recruiter } from '../../actions/types';
import {Link} from 'react-router-dom';
import {loaduserusingtoken} from '../../actions/auth';
import AllApplicants from '../applicants/AllApplicants';



const DashboardApplicants = ({getApplications,  auth, applicationjobs,loaduserusingtoken}) => {
    
    useEffect(()=> {
        loaduserusingtoken();
        getApplications();
        
      }, []);
    return (<Fragment>
           

        <h1>Dashboard</h1>
            {auth.user && auth.user.who === Recruiter ? 
            <Fragment>
                <h3> 
                    <i className="fas fa-user"></i>
                    All applicants
                </h3>
                <AllApplicants applicationjobs={applicationjobs}/>
            </Fragment>
            :
            <Fragment>
               
            </Fragment>
            }
    
    </Fragment>);
};

DashboardApplicants.propTypes = {
   
    auth: PropTypes.object.isRequired,
    applicationjobs: PropTypes.object.isRequired,
    loaduserusingtoken: PropTypes.func.isRequired,
    getApplications: PropTypes.func.isRequired,
    
   
}
const mapStateToProps = (state) => ({
    auth: state.authReducer,
    applicationjobs: state.applicationjobs,
    
});

export default connect(mapStateToProps, {loaduserusingtoken, getApplications})(DashboardApplicants);
