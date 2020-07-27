import React from 'react';
import './scss/component66.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

export default function Component66(){
    return(
        <div className="type-66">
            <div className="container">
                <div className="row nl-row-66">
                    <div className="col-lg-9 col-md-8 col-sm-12 col-sm-12">
                        <div className="nl-content">
                            <h2 className="nl-title">Are You Ready To Take It To The Next Level ?</h2>
                            <p className="nl-decs">Ellentesque habitant morbi et netus et malesuada fames ac turpis egestas. Sed ut dui ullamcorper interdum nulla eu.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12 col-sm-12">
                        <div className="nl-btn-actions">
                            <Link to="/" className="nl-btn-theme">
                                <span>Read more</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}