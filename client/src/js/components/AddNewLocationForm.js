import React, {useState} from 'react';
import './AddNewLocationForm.css'
import StarSelector from './StarSelector'

const AddNewLocationForm = (props) => {
    const [name, setName] = useState('');
    const [tags, setTags] = useState('');
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');

    return(
        <div className={'AddNewLocationForm'} >
            <div className="field">
                    <label className="label">Location Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Stand Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tags</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Tags... E.g. late night, tortas, tacos" value={tags} onChange={(e) => setTags(e.target.value)}/>
                    </div>
                </div>
                <div className={"field"}>
                    <label className='label'>Rating</label>
                    <div className='control'>
                        <StarSelector rating={rating} handleChange={setRating} />
                    </div>
                </div>
                <div className={"field"}>
                    <label className='label'>Review</label>
                    <div className='control'>
                    <textarea className="textarea" placeholder="Write your review here" value={review} onChange={(e) => setReview(e.target.value)} ></textarea>
                    </div>
                </div>
        </div>
    )

}

export default AddNewLocationForm;