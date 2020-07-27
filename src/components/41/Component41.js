import React from "react";
import './scss/41.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
export default function Component41(){
    return(
        <div className="type-41">
            <div className="container ">
                <div className="nl-listing-frm">
                    
                    <h2 className="nl-title">
                        <FontAwesomeIcon icon={faListAlt} />
                        Amenties
                    </h2>
                    <div className="nl-ctn row">
                        <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Accepts Credit Cards</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Pets Friendly</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Home Delivery</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Sporting Goods</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Wireless Internet</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Street Parking</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Men Clothing</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Coupons</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Accessories</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                       <div className="nl-col-item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <a href="#" className="nl-amenties__link">Jewelry</a>
                            <FontAwesomeIcon icon={faCheckSquare} />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}