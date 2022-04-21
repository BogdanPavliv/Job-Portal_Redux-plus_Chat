import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {} from '../../actions/jobs';
import moment from "moment";
import {Link} from 'react-router-dom';
// import deleteJob from '../../actions/jobs';
import {changeStatus} from '../../actions/applications';


const DisplayRecruiterSide = ({applicationjobs, changeStatus}) => {
    
    applicationjobs =  applicationjobs.filter((val) => val.status !== 'Rejected' && val.status!== 'Accepted');
    const code = applicationjobs.map(({
        applicant: {name,skills},
        dateOfJoining,
        dateOfApplication,
        sop,
        status,
        job_id,
        _id
        }) => <table className='table' key={_id}>
        
{name ? 
<Fragment>
    <tr>
        <th>Бажана посада заявника</th>
        <td>{name}</td>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}

{skills ? 
<Fragment>
    <tr>
        <th>Навички заявника</th>
        <td>{skills}</td>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}


{dateOfApplication ? 
<Fragment>
    <tr>
        <th>Дата подачі заявки</th>
        <td>{dateOfApplication}</td>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}


{sop ? 
<Fragment>
    <tr>
        <th>Повідомлення від кандидата</th>
        <td>{sop}</td>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}

{status ? 
<Fragment>
    <tr>
        <th>Статус заявки</th>
        <td>{status}</td>
    </tr>
</Fragment>
: 
<Fragment> </Fragment>}
    
<tr>
    <td>
    
    {
    status === 'Applied' ? 
    <Fragment>
        <button className="btn btn-success" onClick={(e) => changeStatus({_id,status, newstatus: 'Shortlist', nopositions: 0, noapplications: 0,job_id})}>Короткий список дій</button>
    </Fragment>
    :
    (
        status === 'Shortlist' ? 
        <button className="btn btn-success" onClick={(e) => changeStatus({_id,status, newstatus: 'Accepted', nopositions: 1, noapplications: 0, job_id})}>Прийняти</button>
        :
        <Fragment/>
    )
    }    
    </td>
    {status !== 'Accepted' ? <td>
    <button className="btn btn-danger" onClick={(e) => changeStatus({_id,status, newstatus: 'Rejected', nopositions: 0, noapplications: -1, job_id})}>Відхилити</button>
    </td>
    :
    <Fragment/>
}
    
    </tr>

</table>)
    return (
        <Fragment>
            
            {code}
        </Fragment>
    );
}

DisplayRecruiterSide.propTypes = {
    applicationsjob: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    applicationsjob: state.applications.applications
});
export default connect(mapStateToProps, {changeStatus})(DisplayRecruiterSide
);
