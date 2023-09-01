import React from 'react';
import './Homescreen.css';

const UnknownComponent = (props) => {
    const data = props.data;

    return (
        <div>
            {/* Header */}
            <header>
                <h1>I Heard:</h1>
            </header>

            <div>
                <h3>{data.utterance}</h3>
            </div>
        </div>
    );
}

export default UnknownComponent;
