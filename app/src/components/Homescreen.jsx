import React from 'react';
import './Homescreen.css';

const HomescreenComponent = (props) => {
    const data = props.data;

    return (
        <div className="video-display">

            {/* Header */}
            <header>
                <h1>OVOS React GUI</h1>
            </header>

            {/* Notifications */}
            {data.notification_model.count > 0 && (
                <div className="notifications">
                    <h3>Notifications:</h3>
                    <ul>
                        {data.notification_model.storedmodel.map((notification, index) => (
                            <li key={index}>
                                <strong>{notification.text}</strong>
                                <p>Type: {notification.type}</p>
                                <p>Duration: {notification.duration} seconds</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Sample Commands */}
            <div className="commands">
                <h3>Try these commands:</h3>
                <ul>
                    {data.skill_examples.examples.map((example, index) => (
                        <li key={index}>{example}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default HomescreenComponent;
