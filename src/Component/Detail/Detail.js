import React from 'react';
import '../Cart/Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faStarHalf, faDollarSign, faTimes, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Detail = (props) => {
    const quit = props.quit;
    const enrollNow = props.enrollNow;

    const { name, description, rating, status, price, students, image, instructor } = props.item;
    return (
        <div className="cart">
            <span className="quit" onClick={() => quit(true)}><FontAwesomeIcon icon={faTimes} /></span>
            <div className="row">
                <div className="course col-8">
                    <div className="big-container">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <img src={image} alt="Course Img" />
                                <div className="d-flex justify-content-around">
                                    <h4><FontAwesomeIcon icon={faDollarSign} />{price}</h4>
                                    <h5><FontAwesomeIcon icon={faUsers} /> {students}</h5>
                                </div>
                            </div>
                            <div className="info-detail col-md-6">
                                <h4>{name}</h4>
                                <p>{description}</p>
                                <h6><span><FontAwesomeIcon icon={faChalkboardTeacher} /></span> {instructor}</h6>
                                <div>
                                    <span className="rating-number">{rating} </span>
                                    <span className="rating-star">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStarHalf} />
                                    </span>
                                </div>
                                <p className="badge badge-info">{status}</p><br />
                                <button className="btn btn-outline-info mt-2" onClick={() => enrollNow(props.item)}>Enroll Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;