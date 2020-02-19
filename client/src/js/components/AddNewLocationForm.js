import React, { useState } from 'react';
import './AddNewLocationForm.css'
import StarSelector from './StarSelector'

const AddNewLocationForm = (props) => {

    return (
        <div className={'AddNewLocationForm'} >
            <div className="field">
                <label className="label">Location Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Stand Name" value={props.name} onChange={(e) => props.setName(e.target.value)} />
                </div>
            </div>
            <div className="field">
                <label className="label">Tags</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Tags... E.g. late night, tortas, tacos" value={props.tags} onChange={(e) => props.setTags(e.target.value)} />
                </div>
            </div>
            <div className={"field"}>
                <label className='label'>Rating</label>
                <div className='control'>
                    <StarSelector rating={props.rating} handleChange={props.setRating} />
                </div>
            </div>
            <div className={"field"}>
                <label className='label'>Review</label>
                <div className='control'>
                    <textarea className="textarea" placeholder="Write your review here" value={props.review} onChange={(e) => props.setReview(e.target.value)} ></textarea>
                </div>
            </div>
            <div className="control">
                <button onClick={props.handleSubmit} className="button is-link">Submit</button>
            </div>
        </div>
    )

}

export default AddNewLocationForm;