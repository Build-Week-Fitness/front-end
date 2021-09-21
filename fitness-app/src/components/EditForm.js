import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axiosWithAuth from './../utils/axiosWithAuth';

const EditForm = props => {
    const initialValues = {
        id: props.item.id,
        name: props.item.name,
        instructor_name: props.item.instructor_name,
        type: props.item.type,
        intensity: props.item.intensity,
        location: props.item.location,
        max_size: props.item.max_size,
        date: props.item.date,
    }
    const [editItem, setEditItem] = useState(initialValues);
    const history = useHistory();

    const updateForm = (inputName, inputValue) => {
        setEditItem({
            ...editItem,
            [inputName]: inputValue
        })
    }

    const submitForm = e => {
        const updatedClass = {
            id: props.item.id,
            name: editItem.name.trim(),
            instructor_name: editItem.instructor_name.trim(),
            type: editItem.type.trim(),
            intensity: editItem.intensity.trim(),
            location: editItem.location.trim(),
            max_size: editItem.max_size.trim(),
            date: editItem.date.trim(),
        }
        axiosWithAuth()
            .put(`/api/auth/instructor/classes/${editItem.id}`, updatedClass)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const onChange = e => {
        const { name, value } = e.target;
        updateForm(name, value);
    }

    const onSubmit = e => {
        e.preventDefault();
        submitForm();
        history.push('/class-admin');
    }

    const deleteClass = e => {
        axiosWithAuth()
            .delete(`/api/auth/instructor/classes/${editItem.id}`)
            .then(res => {
                console.log(res);
                history.push('/class-admin');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                <div className="form-body">
                    <div className="form-group">
                        <label>Name </label>
                        <input value={editItem.name}
                            onChange={onChange}
                            name="name"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Instructor </label>
                        <input value={editItem.instructor_name}
                            onChange={onChange}
                            name="instructor_name"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Type </label>
                        <input value={editItem.type}
                            onChange={onChange}
                            name="type"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Intensity </label>
                        <input value={editItem.intensity}
                            onChange={onChange}
                            name="intensity"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Location </label>
                        <input value={editItem.location}
                            onChange={onChange}
                            name="location"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Max size </label>
                        <input value={editItem.max_size}
                            onChange={onChange}
                            name="max_size"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Date </label>
                        <input value={editItem.date}
                            onChange={onChange}
                            name="date"
                            type="text"
                            className="form-control" />
                    </div>
                </div>
                <div className="form-submit">
                    <input type="submit" className="submit-btn" value="Save" />
                </div>
                <div className="delete-class">
                    <button onClick={deleteClass}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm;