import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ClassDetails(props) {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const find_item = props.classes.find(item => item.name.trim() === id)
        setItem(find_item);
    }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="class-details-wrapper">
            <h2>Name: <span>{item.name}</span></h2>
            <p>Type: <span>{item.type}</span></p>
            <p>Intensity: <span>{item.intensity}</span></p>
            <p>Location: <span>{item.location}</span></p>
            <p>Date: {item.date}</p>
            <p>Time: {item.start_time}</p>
            <p>Duration: {item.duration} days</p>
            <p>Reservation: {item.signed_in}/{item.max_capacity}</p>
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