import React, { useEffect, useRef, useState } from 'react';
import './WebViewHtmlFrameComponent.css';

const WebViewHtmlFrameComponent = (props) => {
    const data = props.data;
    const iframeRef = useRef(null);

    const [popupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        if (data.pageHtml) {
            const iframeDoc = iframeRef.current.contentDocument;
            iframeDoc.open();
            iframeDoc.write(data.pageHtml);
            iframeDoc.close();
        }
    }, [data.pageHtml]);

    // This is a placeholder function and may need to be modified to reflect actual behavior.
    const handlePopup = (event) => {
        // Handle popups if needed.
        setPopupVisible(true);
    };

    return (
        <div className="web-view-container">
            <iframe 
                title="Main WebView"
                ref={iframeRef}
                srcDoc={data.pageHtml}
                sandbox="allow-scripts"
                className="web-engine-view"
                onLoad={handlePopup}
            />
            {popupVisible && (
                <div className="popup-root">
                    <iframe title="Popup WebView" className="popup-web-view" src="about:blank"></iframe>
                </div>
            )}
        </div>
    );
};

export default WebViewHtmlFrameComponent;
