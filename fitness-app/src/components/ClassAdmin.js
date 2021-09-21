import React from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import EditForm from './EditForm';

const ClassAdmin = (props) => {
    const { url } = useRouteMatch();

    return (
        <div className="classes-list">
            {props.classes ? props.classes.map(item => (
                <div key={item.id} className="class-item">
                    <h2>Name: <span>{item.name}</span></h2>
                    <p>Instructor: <span>{item.instructor_name}</span></p>
                    <p>Type: <span>{item.type}</span></p>
                    <p>Intensity: <span>{item.intensity}</span></p>
                    <p>Location: <span>{item.location}</span></p>
                    <p>Max size: {item.max_size}</p>
                    <p>Date: {item.date}</p>
                    <Link className="edit-btn" to={`${url}/edit-class/${item.id}`}>Edit</Link>
                    <Route path={`${url}/edit-class/${item.id}`}>
                        <EditForm item={item} />
                    </Route>
                </div>
            )) :
                <h2>No classes are available</h2>}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        classes: state.classesReducer.classes,
    }
}

export default connect(mapStateToProps)(ClassAdmin);