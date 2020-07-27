import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight, faDice} from '@fortawesome/free-solid-svg-icons';
import './scss/component94.scss';
import Image1 from './img/service-1.png';
import Image2 from './img/service-small-2.png';
export default function Component94(){
    return(
        <div className="type-94">
            <div className="container">
                <div className="row">
                    <div className="nl-part-left col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div className="nl-widget-content">
                            <div className="sub-title"><span>FOR WOMEN'S</span></div>
                            <h3 className="nl-title">Business Planning</h3>
                            <p className="nl-decs">You have to deal with the fashion egos. You know, there is a lot. It shouldn't be treated that seriously because fashion is only making dresses to make women look beautiful.</p>
                            <Link to="/" className="nl-btn-theme">
                                <span>Read more</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                    <div className="nl-part-right col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div className="nl-images">
                            <img src={Image1} className="nl-img-1" alt="service" />
                            <img src={Image2} className="nl-img-2" alt="service" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}