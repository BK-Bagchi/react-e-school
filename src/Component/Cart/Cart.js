import React from 'react';
import './Cart.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faStarHalf, faDollarSign, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {

    const cartData = props.cart;
    const takenCourses = cartData.length;
    let totalPayable = 0;
    const items = cartData.map((data) => {
        const { name, description, rating, status, price, students, image, instructor } = data;
        totalPayable = totalPayable + parseInt(price);

        return (
            <>
                <div className="course col-6">
                    <div className="big-container">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <img src={image} className="course-img" alt="Course Img" />
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
                                <p className="badge badge-info">{status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    });

    return (
        <section className="cart mb-4">
            <div className="cart-detail">
                <table className="cart-table table table-hover">
                    <tbody>
                        <tr className="table-info">
                            <td>Taken Courses</td>
                            <td>{takenCourses}</td>
                        </tr>
                        <tr className="table-active">
                            <td>Total Payable</td>
                            <td>${totalPayable}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                {items}
            </div>
        </section>
    );
};

export default Cart;