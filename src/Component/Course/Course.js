import React from 'react';
import './Course.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faStarHalf, faDollarSign } from '@fortawesome/free-solid-svg-icons';
const Course = (props) => {
    const seeDetail = props.seeDetail;
    const enrollNow = props.enrollNow;

    const { image, name, price, rating, status, students } = props.courseInfo

    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt="Course Title Img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        <span className="rating-number">{rating} </span>
                        <span className="rating-star">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalf} />
                        </span>
                    </p>
                    <p className="card-text"><FontAwesomeIcon icon={faDollarSign} /> {price}</p>
                    <p className="card-text"><FontAwesomeIcon icon={faUsers} /> {students}</p>
                    <p className="card-text badge badge-info">{status}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info" onClick={() => { seeDetail(props.courseInfo) }}>See Detail</button>
                    <button className="btn btn-outline-info" onClick={() => { enrollNow(props.courseInfo) }}>Enroll Now</button>
                </div>
            </div>
        </>
    );
};

export default Course;