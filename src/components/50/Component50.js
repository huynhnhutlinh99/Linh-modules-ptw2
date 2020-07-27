import React from "react";
import "./scss/50.scss";
import PostImage from "./img/post-10.jpg";

export default function Component50(){
    return(
        <div className="type-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-sm-12">
                        <ul>
                            <li className="nl-view-list-item row">
                                <div className="nl-post-image">
                                    <img src={PostImage} alt="post image"/>
                                </div>
                                <div className="post-content">
                                    <div className="nl-title">
                                        <a href="#">Server-Side Rendering</a>
                                    </div>
                                    <div className="nl-post-date">
                                        <a href="#">Sport</a>
                                        /
                                        <span>21 Dec 16</span>
                                    </div>
                                    <div className="nl-ctn">
                                        Pellentesque placerat eget euismod. Mauris tempor cursus dolor. Ut dolor elit, ullamcorper quis ornare, congue id orci diam.
                                    </div>
                                </div>
                            </li>
                            <li className="nl-view-list-item row">
                                <div className="nl-post-image">
                                    <img src={PostImage} alt="post image"/>
                                </div>
                                <div className="post-content">
                                    <div className="nl-title">
                                        <a href="#">Latest Fashion Trends 2016</a>
                                    </div>
                                    <div className="nl-post-date">
                                        <a href="#">Sport</a>
                                        /
                                        <span>21 Dec 16</span>
                                    </div>
                                    <div className="nl-ctn">
                                        Pellentesque placerat eget euismod. Mauris tempor cursus dolor. Ut dolor elit, ullamcorper quis ornare, congue id orci diam.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}