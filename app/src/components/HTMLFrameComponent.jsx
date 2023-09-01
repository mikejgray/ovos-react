import React from 'react';
import './HTMLFrameComponent.css';
import WebViewHtmlFrameComponent from './WebViewHtmlFrameComponent';

const HTMLFrameComponent = (props) => {
    const data = props.data;

    return (
        <div className="mycroft-delegate">
            <WebViewHtmlFrameComponent data={data} />
        </div>
    );
};

export default HTMLFrameComponent;
