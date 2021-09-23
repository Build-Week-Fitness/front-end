import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { cancelClass } from '../../actions/reserveActions';
import { editClass } from '../../actions/classActions';

const Bookings = props => {
    const history = useHistory();

    const handleDetails = (item) => {
        history.push(`../class/${item.name}`);
    }

    const handleCancel = (item) => {
        props.cancelClass(item.id);
        props.editClass(item);
    }

    return (
        <div className="booking-container">
            {
                props.bookedClasses === [] ?
                    <h2>No booked classes</h2> :
                    props.bookedClasses.map(item => {
                        return <div key={item.id} className="booked-card">
                            <h2 onClick={() => handleDetails(item)}>{item.name}</h2>
                            <p>{item.date}</p>
                            <p>{item.start_time}</p>
                            <div className="cancel-btn">
                                <button onClick={() => handleCancel(item)}>Cancel</button>
                            </div>
                        </div>
                    })
            }
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        bookedClasses: state.reserveReducer.bookedClasses,
        classes: state.classesReducer.classes,
    }
}

export default connect(mapStateToProps, { cancelClass, editClass })(Bookings);

