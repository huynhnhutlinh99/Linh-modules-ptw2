import React from 'react';
import './scss/component71.scss';

import Iamge1 from './img/1.PNG';
import Iamge2 from './img/2.PNG';
import Iamge3 from './img/3.PNG';
import Iamge4 from './img/4.PNG';
import Iamge5 from './img/5.PNG';
import Iamge6 from './img/6.PNG';
export default function Component71(){
    return(
        <div className="type-71">
            <div className="container">
                <div className="nl-header-name">
                    <h2 className="nl-title">Our Services</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge1} alt="hinh"/>
                            </div>
                            <h3 className="nl-item-name">Portfolio Management</h3>
                            <p className="decs">Aenean lacinia bibendum nulla sed consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge2} alt="hinh"/>
                            </div>
                            <h3 className="nl-item-name">Portfolio Management</h3>
                            <p className="decs">Aenean lacinia bibendum nulla sed consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge3} alt="hinh"/>
                            </div>
                            <h3 className="nl-item-name">Portfolio Management</h3>
                            <p className="decs">Aenean lacinia bibendum nulla sed consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge4} alt="hinh"/>
                            </div>
                            <h3 className="nl-item-name">Portfolio Management</h3>
                            <p className="decs">Aenean lacinia bibendum nulla sed consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge5} alt="hinh"/>
                            </div>
                            <h3 className="nl-item-name">Portfolio Management</h3>
                            <p className="decs">Aenean lacinia bibendum nulla sed consectetur</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="nl-content">
                            <div className="nl-icon-part">
                                <img src={Iamge6} alt="hinh"/>
                            </div>
                            <h3 className="nl-item-name">Portfolio Management</h3>
                            <p className="decs">Aenean lacinia bibendum nulla sed consectetur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}