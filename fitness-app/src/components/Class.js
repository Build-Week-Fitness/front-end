import React from 'react';
import { connect } from 'react-redux';

const Class = (props) => {

    return (
        <div className="classes-list">
            {props.classes ? props.classes.map(item => (
                <div key={item.id} className="class-item">
                    <h2>Name: {item.name}</h2>
                    <p>Instructor: {item.instructor_name}</p>
                    <p>Type: {item.type}</p>
                    <p>Intensity: {item.intensity}</p>
                    <p>Location: {item.location}</p>
                    <p>Max size: {item.max_size}</p>
                    <p>Date: {item.date}</p>
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

export default connect(mapStateToProps)(Class);