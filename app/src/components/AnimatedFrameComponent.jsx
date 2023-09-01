import React, { useEffect, useState } from 'react';
import './AnimatedImageFrameComponent.css';

const AnimatedImageFrameComponent = (props) => {
    const { background_color, title, caption, image, fill } = props.data;
    const hasTitle = title && title.length > 0;
    const hasCaption = caption && caption.length > 0;

    const [fillMode, setFillMode] = useState("stretch"); // default

    useEffect(() => {
        if (fill === "PreserveAspectCrop") {
            setFillMode("cover");
        } else if (fill === "PreserveAspectFit") {
            setFillMode("contain");
        } else if (fill === "Stretch") {
            setFillMode("stretch");
        } else {
            setFillMode("stretch");
        }
    }, [fill]);

    return (
        <div className="animated-image-frame" style={{ backgroundColor: background_color || "#000000" }}>
            {hasTitle && <h3 className="image-title">{title}</h3>}
            <div className="animated-image-container">
                <img src={image} alt={caption || "Animated Image"} style={{ objectFit: fillMode }} />
                {hasCaption && <div className="image-caption-box">
                    <h2 className="image-caption">{caption}</h2>
                </div>}
            </div>
        </div>
    );
};

export default AnimatedImageFrameComponent;
