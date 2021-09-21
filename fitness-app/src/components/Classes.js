import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses, fetchFail } from '../actions';
import Class from './Class';

const Classes = (props) => {

    useEffect(() => {
        props.getClasses();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (props.error) {
        return <div className="classes-wrapper">
            <h2>We got an error: {props.error}</h2>
        </div>
    }

    if (props.isFetching) {
        return <div className="classes-wrapper">
            <h2>Fetching Classes. Please wait.</h2>
        </div>
    }

    return (
        <div className="classes-wrapper">
            <h2>This is a protected route</h2>
            <Class classes={props.classes} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.classesReducer.isFetching,
        error: state.classesReducer.error,
    }
}

export default connect(mapStateToProps, { getClasses, fetchFail })(Classes);