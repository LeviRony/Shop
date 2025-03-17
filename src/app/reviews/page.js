'use client'

import { useState } from 'react';
import styles from './page.module.css';

const Reviews = () => {

    const [reviews, setReviews] = useState([
        { id: 1, reviewerName: 'John Doe', content: 'Great product! Highly recommended.' },
        { id: 2, reviewerName: 'Jane Smith', content: 'Works well, but could use some improvements.' },
    ]);

    const [newReview, setNewReview] = useState({
        reviewerName: '',
        content: '',
    });

    const handleNewReviewNameChange = (event) => {
        const { name, value } = event.target;

        setNewReview(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const handleSendNewReview = (event) => {
        event.preventDefault();

        if (newReview.reviewerName && newReview.content) {
            setReviews(prevReviews => {
                return [...prevReviews, { ...newReview }] /* brake review and adding a new value*/
            });

            setNewReview(
                {
                    reviewerName: '',
                    content: '',
                }
            );

        }
    }


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Product Reviews</h1>

            <div className={styles.reviewList}>
                {
                    reviews.map((review) => {
                        return (
                            <div key={review.id} className={styles.reviewCard}>
                                <h3 className={styles.reviewerName}>{review.reviewerName}</h3>
                                <p className={styles.reviewContent}>{review.content}</p>
                            </div>

                        )
                    })
                }
            </div>

            <form className={styles.reviewForm} onSubmit={handleSendNewReview}>
                <input
                    type="text"
                    name="reviewerName"
                    placeholder="Your Name"
                    className={styles.input}
                    value={newReview.reviewerName}
                    onChange={handleNewReviewNameChange}
                    required
                />

                <textarea
                    name="content"
                    placeholder="Write your review here..."
                    className={styles.textarea}
                    value={newReview.content}
                    onChange={handleNewReviewNameChange}
                    required
                />

                <button
                    type="submit"
                    className={styles.button}
                >
                    Send Review
                </button>
            </form>


        </div>
    );
}

export default Reviews;