import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import "../../static/style.css";


const TemplateForProfile = ({profile}) => {
    const {
        name,
        email,
        contactnumber,
        bio,
        skills,

    } = profile;

    // this.onChangeimage = this.onChangeimage.bind(this);

    // onChangeimage(event) {
    //     this.setState({ image: event.target.files[0] });
    //     const formData = new FormData();
    //     formData.append('file', event.target.files[0]);
    //         axios.post('http://localhost:4000/applicant/addfile?type=image&email=' + localStorage.getItem('user_email'), formData)
    //         .then(res => {
    //             console.log(res.json);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    return (
        <Fragment>
            <div class="page-header">
              <div class="profile-header-top">
                <div class="profile-title">      
                  <h2>Мій акаунт</h2>     
                 </div>
                </div>
            </div>
            <div class="col-sm-10">
             <p class="lead">Пошук роботи на DevConnector анонімний. Ваші персональні дані побачать лише рекрутери.</p>
              <br/>
            </div>
            <table className='table'>
                    {name ?
                    <><Fragment>
                                                                     
                        </Fragment><Fragment>
                        <div className="form-group">
                        <label class="col-sm-3 control-label" for="name">Посада або ім'я</label>
                        <div class="col-sm-9">
                            <input type="text" name="name" id="name"
                             className="form-control" 
                             value={name}                             
                             />
                             <p class="help-block">
                             Повну назву посади, будь ласка - кандидат. Прізвище та ім'я - рекрутер
                            </p>
                         </div>
                        </div>
                    </Fragment></>
            : 
            <Fragment> </Fragment>}
            {email ? 
            <Fragment>
                <div className="form-group">
                        <label class="col-sm-3 control-label" for="name">Email</label>
                        <div class="col-sm-9">
                            <input type="text" name="name" id="name"
                             className="form-control" 
                             value={email} />
                             </div>
                            </div>
            </Fragment>
            : 
            <Fragment> </Fragment>}
            {contactnumber ? 
            <Fragment>
                <tr>
                    <th>Номер телефону</th>
                    <td>{contactnumber}</td>
                </tr>
            </Fragment>
            : 
            <Fragment> </Fragment>}
            {bio ? 
            <Fragment>
                <tr>
                    <th>Біографія</th>
                    <td>{bio}</td>
                </tr>
            </Fragment>
            : 
            <Fragment> </Fragment>}
            {skills ? 
            <Fragment>
                <div className="form-group">
                        <label class="col-sm-3 control-label" for="name">Навички</label>
                        <div class="col-sm-9">
                            <input type="text" name="name" id="name"
                             className="form-control" 
                             value={skills}/>
                             </div>
                            </div>
            </Fragment>
            : 
            <Fragment> </Fragment>}
            </table>
            
        </Fragment>
        
    );
}

TemplateForProfile.propTypes = {
    profile: PropTypes.array.isRequired
}

export default TemplateForProfile;
