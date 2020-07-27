import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

import './scss/component78.scss';
export default function(){
    return(
        <div className="type-78">
            <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
                <Tab eventKey="1" title="Section 1" tabClassName="nl-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus erat, quis varius nibh malesuada ut. In et nunc massa. Pellentesque augue dolor, bibendum id leo sit amet, viverra aliquam sapien. Sed vitae tellus facilisis. stra, per inceptos himenaeos.
                </Tab>
                <Tab eventKey="2" title=" Section 2" tabClassName="nl-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus erat, quis varius nibh malesuada ut. In et nunc massa. Pellentesque augue dolor, bibendum id leo sit amet, viverra aliquam sapien. Sed vitae tellus facilisis. stra, per inceptos himenaeos.
                </Tab>
                <Tab eventKey="3" title="Section 3" tabClassName="nl-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit metus erat, quis varius nibh malesuada ut. In et nunc massa. Pellentesque augue dolor, bibendum id leo sit amet, viverra aliquam sapien. Sed vitae tellus facilisis. stra, per inceptos himenaeos.
                </Tab>
            </Tabs>
        </div>
    );
}