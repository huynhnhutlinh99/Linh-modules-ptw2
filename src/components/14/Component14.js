import React from 'react';
import './scss/14.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

export default function Component14(){
    return(
        <div className="type-14">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-sx-12">
                        <div className="nl-contact-info">
                            <h2 className="nl-block-title">Contact Info</h2>
                            <ul className="nl-ul-ctn-info">
                                <li className="row">
                                    <span className="nl-col-left">
                                        <FontAwesomeIcon icon={faHome} />
                                    </span>
                                    <span className="nl-span-text">Address : Builder Hub, Newyork 10012, USA</span>
                                </li>
                                <li className="row">
                                    <span className="nl-col-left">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <span className="nl-span-text">
                                        +44 567 890123 <br/>
                                        info@castron-demo.com
                                    </span>
                                </li>
                                <li className="row">
                                    <span className="nl-col-left">
                                        <FontAwesomeIcon icon={faMobileAlt} />
                                    </span>
                                    <span className="nl-span-text">
                                        Mon - Sat 8.00 - 18.00 <br/>
                                        Sunday CLOSED
                                    </span>
                                </li>
                            </ul>
                            <p className="nl-text-send-us">Send us an email and we’ll get in touch shortly</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                        <div className="nl-link-footer">
                            <h2 className="nl-block-title">Link Footer</h2>
                            <ul className="nl-link-footer__ul">
                                <li className="nl-link-footer__ul__li">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="nl-link-footer__ul__li">
                                    <a href="#">Advertise</a>
                                </li>
                                <li className="nl-link-footer__ul__li">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                                <li className="nl-link-footer__ul__li">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="nl-link-footer__ul__li">
                                    <a href="#">Careers</a>
                                </li>
                                <li className="nl-link-footer__ul__li">
                                    <a href="#">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-sx-12">
                        <div>
                            <h2 className="nl-block-title">Twitter Block</h2>
                            <div>
                                <TwitterTimelineEmbed
                                sourceType="widget"
                                screenName="gaviasthemes"
                                theme="dark"
                                widgetId="1192637475564310528"
                                noHeader= {true}
                                noFooter= {true}
                                noScrollbar = {true}
                                noBorders = {true}
                                transparent={true}
                                options={{height: 606}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-sx-12">
                        <div className="nl-subs-our">
                            <h2 className="nl-block-title">Subscribe Our Newsletter</h2>
                            <form>
                                <div>Class aptent taciti sociosqu ad litora torquent per conubia nostra per inceptos.</div>
                                <input type="text"/>
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}