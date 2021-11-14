import React from 'react';
import Rating from 'react-rating';
import { useEffect } from 'react';
import { useState } from 'react';
import './ShowReview.css'

const ShowReview = () => {
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch('https://pure-gorge-40152.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    // All reviews and stars here
    return (
        <div className='container my-4'>
            <div className='my-4 text-start text-white'>
                <h2 className='fw-bold'>Our Achievements Reviews </h2>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                {
                    reviews.map(review => <div key={review._id} className="col g-2">
                        {/* <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">{review.name}</h4>
                                <h6 className="card-title"><small>{review.email}</small></h6>
                                <p className="card-text text-secondary">{review.review}</p>
                                <Rating
                                    initialRating={review.point}
                                    emptySymbol="far fa-star icon-color icon-gold"
                                    fullSymbol="fas fa-star icon-color icon-gold"
                                    readonly></Rating>
                            </div>
                        </div> */}
                        <div class="card text-center">
                            <div class="card-header text-end bg-primary fw-bold text-white">
                            MR. {review.name}
                            </div>
                            <div class="card-body text-start">
                                <p class="card-text">{review.review}</p>
                            </div>
                            <div class="card-footer text-end text-muted">
                                <Rating
                                    initialRating={review.point}
                                    emptySymbol="far fa-star icon-color icon-gold"
                                    fullSymbol="fas fa-star icon-color icon-gold"
                                    readonly>
                                </Rating>
                            </div>
                            </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShowReview;