import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

const Class = (props) => {
    const { url } = useRouteMatch();

    return (
        <div className="classes-list">
            {props.classes ? props.classes.map(item => (
                <div key={item.id} className="class-item">
                    <Link to={`${url}/${item.id}`}>
                        <h2>Name: <span>{item.name}</span></h2>
                    </Link>
                    <p>Instructor: <span>{item.instructor_name}</span></p>
                    <p>Type: <span>{item.type}</span></p>
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