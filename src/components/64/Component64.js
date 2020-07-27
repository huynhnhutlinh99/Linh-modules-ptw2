import React from 'react';
import './scss/component64.scss';
import {Link} from "react-router-dom";
import Image64 from './img/64.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

export default function Component64(){
    return(
        <div className="type-64">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <h2 className="nl-title">Creative Concept Layouts</h2>
                            <p className="nl-desc">Lorem ipsum dolor amet, consectetur adipisicing, sed eiusmod tempor incididunt labore dolore magna aliqua consectetur adipisicing.</p>
                            <Link to="" className="nl-btn-theme">
                                <span>Read more</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                            <div className="nl-link-video">
                                <Link to="" >
                                    <span>Watch the video</span>
                                    <span className="nl-pu-play">
                                        <FontAwesomeIcon icon={faPlay} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="nl-image-part">
                            <img src={Image64} alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
