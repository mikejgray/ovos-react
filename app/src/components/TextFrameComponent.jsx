import React from 'react';
import './TextFrameComponent.css';

const TextFrameComponent = (props) => {
    const data = props.data;
    const hasTitle = data.title.length > 0;

    return (
        <div className="mycroft-card-delegate">
            <div className="content-item">
                <div 
                    className={`auto-fit-label ${hasTitle ? 'title-label' : ''}`} 
                    style={{ display: hasTitle ? 'block' : 'none' }}
                >
                    {data.title}
                </div>
                <div className="auto-fit-label">
                    {data.text}
                </div>
            </div>
        </div>
    );
};

export default TextFrameComponent;
