import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {deleteEducation} from '../../actions/profile';
import Table from 'react-bootstrap/Table'

const TemplateForEducation = ({educations, deleteEducation}) => {
    const code = educations.map(education => 
        <Fragment> 
        <tr key={education._id} >
        <td>{education.institute}</td>
        <td>{education.from}</td>
        <td>{education.to}</td>
        <td>
            <button className='btn btn-danger' onClick={() => {deleteEducation(education._id) }}>Видалити</button>
        </td>
        </tr>
        </Fragment>
    );
    return (
        <Fragment>
            <h2> Освіта</h2>
            <table className='table'>
                <Table striped bordered hover>
            <thead>
            <tr>
                <th>Назва ЗВО</th>
                <th>Початок навчання</th>
                <th>Кінець навчання</th>
                                <th/>
            </tr>
            </thead>
            <tbody>
            {code}
            </tbody>
            </Table>
            </table>
            
        </Fragment>
    )
}

TemplateForEducation.propTypes = {
    educations: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, {deleteEducation})(TemplateForEducation);
