import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ClassDetails(props) {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const find_item = props.classes.find(item => item.id === parseInt(id))
        setItem(find_item);
        console.log(item)
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="class-details-wrapper">
            <h2>Name: <span>{item.name}</span></h2>
            <p>Instructor: <span>{item.instructor_name}</span></p>
            <p>Type: <span>{item.type}</span></p>
            <p>Intensity: <span>{item.intensity}</span></p>
            <p>Location: <span>{item.location}</span></p>
            <p>Max size: {item.max_size}</p>
            <p>Date: {item.date}</p>
            <Link to={`/class`}><button className="back-button">Back</button></Link>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classesReducer.classes,
    }
}

export default connect(mapStateToProps)(ClassDetails);