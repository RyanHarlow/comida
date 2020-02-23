import React, {useState} from 'react';
import StarSelector from './StarSelector';
import './AddReview.css'
import axios from 'axios';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return { isLoggedIn: state.isLoggedIn };
};

const AddReview = (props) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(5);
    const [placeholder, setPlaceholder] = useState('Add Review Here')

    function handleSubmit(){
      const data = {
        reviewText,
        rating,
        standId: props.id
      }
      axios({
        url: '/api/review',
        method: 'POST',
        contentType: 'application/json',
        data: data
    }).then(res => {
      if(res.data.success){
        setReviewText('');
        setPlaceholder('Review Added');
      }else{
        setReviewText('');
        setPlaceholder('Error adding review')
        console.log(res.data.err);
      }
    }).catch(err => {
      setPlaceholder('Error adding review')
      console.log(err);
    })
    }
if(!props.isLoggedIn){
  return(
  <div>
    Please Signup or Login to submit review
  </div>
  )
}else{
    return(
        <div className={'AddReview'}>
            <div className="field">
  <div className="control">
    <textarea onChange={e => {setReviewText(e.target.value)}} value={reviewText} className="textarea is-primary" placeholder={placeholder}></textarea>
  </div>
</div>
<StarSelector rating={rating} handleChange={setRating}/>
<button onClick={handleSubmit} className="button is-primary">Submit Review</button>

        </div>
    )
}
}

export default connect(mapStateToProps)(AddReview);
