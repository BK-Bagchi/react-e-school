import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Main.css';

import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import Detail from '../Detail/Detail';
import fakedata from '../Fakedata/Fakedata';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [cart, setCart] = useState([]);
    const [detail, setDetail] = useState([]);

    const seeDetail = (info) => {
        setDetail([info]);
        const htmlTag = document.querySelector('.show-detail');
        ReactDOM.findDOMNode(htmlTag).style.display = 'flex';
    }

    const enrollNow = (info) => {
        setCart([...cart, info])
    }

    const quit = (response) => {
        if (response === true) {
            const htmlTag = document.querySelector('.show-detail');
            ReactDOM.findDOMNode(htmlTag).style.display = 'none';
        }
    }

    const courseDetail = detail.map((data) => {
        return (
            <>
                <Detail item={data} quit={quit} enrollNow={enrollNow} />
            </>
        )
    });

    const course = fakedata.map((data) => {
        return (
            <>
                <Course key={data.id} courseInfo={data} seeDetail={seeDetail} enrollNow={enrollNow} />
            </>
        );
    });

    return (
        <>
            <Router>
                <section className="header">
                    <nav className="navigation">
                        <ul className="text-center">
                            <li className="d-inline">
                                <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
                            </li>
                            <li className="d-inline">
                                <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} />({cart.length})</Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <Switch>
                    <Route exact path="/">
                        <section className="courses mb-4">
                            <h2 className="text-center">Available Online Courses</h2>
                            <div className="card-group d-flex align-items-center justify-content-center">
                                {course}
                            </div>
                        </section>
                    </Route>
                    <Route path="/cart">
                        <Cart cart={cart} />
                    </Route>
                </Switch>
            </Router>
            {/* {courseDetail} */}
            <section className="show-detail">
                {courseDetail}
            </section>
        </>
    );
};

export default Header;