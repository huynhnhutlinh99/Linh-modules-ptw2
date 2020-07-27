import  React from 'react';
import './scss/6.scss'
import Listing from './img/listing-20.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faVideo} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faWineGlassAlt} from '@fortawesome/free-solid-svg-icons';
import {faCamera} from '@fortawesome/free-solid-svg-icons';


export default function Component6(){

    const state = {
        title: "Mellow Heaven",
        locateDes: "East Syracuse, NY",
        numberphone: "+013 22632270",
        type: "Hotels",
        nameCity: "New York"
    };

    return(
        <div className="type-6">
            <h2 className="nl-title">
                <span>Most Visited Places</span>  
            </h2>
            <p className="title-desc">Explore the greates places in the city. You won’t be disappointed.</p>
            <div className="nl-views-element-container container">
                <div className="row">
                    <div className="nl-item-col col-lg-3 col-md-6 col-sm-12">
                        <div className="nl-col-ctn">
                            <div className="nl-item-image">
                                <img src={Listing} alt="Most Visited Places" />
                                <span className="nl-ico-video">
                                    <FontAwesomeIcon icon={faVideo}/>
                                    <span>Gallery</span>
                                </span>
                                <span className="nl-ico-camera">
                                    <FontAwesomeIcon icon={faCamera}/>
                                    <span>Video</span>
                                </span>
                            </div>
                            <div className="nl-part-has-line">
                                <div className="nl-listing-info">
                                    <h3>{state.title}</h3>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faMap} /></span>
                                        <span className="nl-text-des">{state.locateDes}</span>
                                    </p>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faPhone} /></span>
                                        <span className="nl-text-des">{state.numberphone}</span>
                                    </p>
                                </div>
                                <div className="nl-listing-footer">
                                <div className="row">
                                    <p className="nl-type-hotels col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faWineGlassAlt} />
                                        <a>{state.type}</a>
                                    </p>
                                    <p className="nl-name-city col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <a>{state.nameCity}</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="nl-item-col col-lg-3 col-md-6 col-sm-12">
                        <div className="nl-col-ctn">
                            <div className="nl-item-image">
                                <img src={Listing} alt="Most Visited Places" />
                                <span className="nl-ico-video">
                                    <FontAwesomeIcon icon={faVideo}/>
                                    <span>Gallery</span>
                                </span>
                                <span className="nl-ico-camera">
                                    <FontAwesomeIcon icon={faCamera}/>
                                    <span>Video</span>
                                </span>
                            </div>
                            <div className="nl-part-has-line">
                                <div className="nl-listing-info">
                                    <h3>{state.title}</h3>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faMap} /></span>
                                        <span className="nl-text-des">{state.locateDes}</span>
                                    </p>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faPhone} /></span>
                                        <span className="nl-text-des">{state.numberphone}</span>
                                    </p>
                                </div>
                                <div className="nl-listing-footer">
                                <div className="row">
                                    <p className="nl-type-hotels col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faWineGlassAlt} />
                                        <a>{state.type}</a>
                                    </p>
                                    <p className="nl-name-city col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <a>{state.nameCity}</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="nl-item-col col-lg-3 col-md-6 col-sm-12">
                        <div className="nl-col-ctn">
                            <div className="nl-item-image">
                                <img src={Listing} alt="Most Visited Places" />
                                <span className="nl-ico-video">
                                    <FontAwesomeIcon icon={faVideo}/>
                                    <span>Gallery</span>
                                </span>
                                <span className="nl-ico-camera">
                                    <FontAwesomeIcon icon={faCamera}/>
                                    <span>Video</span>
                                </span>
                            </div>
                            <div className="nl-part-has-line">
                                <div className="nl-listing-info">
                                    <h3>{state.title}</h3>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faMap} /></span>
                                        <span className="nl-text-des">{state.locateDes}</span>
                                    </p>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faPhone} /></span>
                                        <span className="nl-text-des">{state.numberphone}</span>
                                    </p>
                                </div>
                                <div className="nl-listing-footer">
                                <div className="row">
                                    <p className="nl-type-hotels col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faWineGlassAlt} />
                                        <a>{state.type}</a>
                                    </p>
                                    <p className="nl-name-city col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <a>{state.nameCity}</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="nl-item-col col-lg-3 col-md-6 col-sm-12">
                        <div className="nl-col-ctn">
                            <div className="nl-item-image">
                                <img src={Listing} alt="Most Visited Places" />
                                <span className="nl-ico-video">
                                    <FontAwesomeIcon icon={faVideo}/>
                                    <span>Gallery</span>
                                </span>
                                <span className="nl-ico-camera">
                                    <FontAwesomeIcon icon={faCamera}/>
                                    <span>Video</span>
                                </span>
                            </div>
                            <div className="nl-part-has-line">
                                <div className="nl-listing-info">
                                    <h3>{state.title}</h3>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faMap} /></span>
                                        <span className="nl-text-des">{state.locateDes}</span>
                                    </p>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faPhone} /></span>
                                        <span className="nl-text-des">{state.numberphone}</span>
                                    </p>
                                </div>
                                <div className="nl-listing-footer">
                                <div className="row">
                                    <p className="nl-type-hotels col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faWineGlassAlt} />
                                        <a>{state.type}</a>
                                    </p>
                                    <p className="nl-name-city col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <a>{state.nameCity}</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="nl-item-col col-lg-3 col-md-6 col-sm-12">
                        <div className="nl-col-ctn">
                            <div className="nl-item-image">
                                <img src={Listing} alt="Most Visited Places" />
                                <span className="nl-ico-video">
                                    <FontAwesomeIcon icon={faVideo}/>
                                    <span>Gallery</span>
                                </span>
                                <span className="nl-ico-camera">
                                    <FontAwesomeIcon icon={faCamera}/>
                                    <span>Video</span>
                                </span>
                            </div>
                            <div className="nl-part-has-line">
                                <div className="nl-listing-info">
                                    <h3>{state.title}</h3>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faMap} /></span>
                                        <span className="nl-text-des">{state.locateDes}</span>
                                    </p>
                                    <p>
                                        <span className="nl-icon-des"><FontAwesomeIcon icon={faPhone} /></span>
                                        <span className="nl-text-des">{state.numberphone}</span>
                                    </p>
                                </div>
                                <div className="nl-listing-footer">
                                <div className="row">
                                    <p className="nl-type-hotels col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faWineGlassAlt} />
                                        <a>{state.type}</a>
                                    </p>
                                    <p className="nl-name-city col-lg-6 col-md-6 col-sm-6">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <a>{state.nameCity}</a>
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}