import React, { useState } from 'react';
import { submitNotes } from '../../hooks/notes/submitNotes';

const NoteForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await submitNotes(formData);
        if (result.success) {
            setFormData({
                title: '',
                description: ''
            })
            e.target.reset();
            window.location.reload();
            
        } else {
            alert(result.message);
        }
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 m-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3 ">
                            <label htmlFor="title">Title</label>
                            <input onChange={handleChange} type="text" className="form-control" id="title" name="title" placeholder="Enter title" />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea onChange={handleChange} className="form-control" id="description" name="description" rows="3" placeholder="Enter description"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Add Note</button>
                    </form>
                </div>
            </div>         
        </div>
    );
};

export default NoteForm;