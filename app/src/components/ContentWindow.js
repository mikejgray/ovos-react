import React from "react";
import VideoDisplay from "./VideoDisplay.js";
import Sidebar from "./Sidebar.js";
import "./ContentWindow.css";

function ContentWindow(props) {
  let display;

  const standardDisplay = (
    <React.Fragment>
      <Sidebar owm_key={props.owm_key} />
      <VideoDisplay />
    </React.Fragment>
  );

  if (props.display === null) {
    display = standardDisplay;
  } else {
    display = props.display;
  }

  return <div className="content-container">{display}</div>;
}

export default ContentWindow;
