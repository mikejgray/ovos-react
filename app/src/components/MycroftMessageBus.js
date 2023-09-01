import React from "react";
import Weather from "./widgets/Weather.js";
import UnknownComponent from "./UnknownComponent.jsx";
// import ShowTextComponent from "./ShowTextComponent.jsx";
import TextFrameComponent from "./TextFrameComponent.jsx";
import HTMLFrameComponent from "./HTMLFrameComponent.jsx";
import ImageFrameComponent from "./ImageFrameComponent.jsx";

function MycroftMessageBus(props) {
  const socket = new WebSocket(`ws://${props.host}:8181/core`);

  socket.onmessage = (event) => {
    let eventData = JSON.parse(event.data);

    if (eventData.type === "gui.value.set") {
      // console.log(eventData.data);
      switch (eventData.data.__from) {
        case "mycroft-weather.mycroftai":
          props.callback(handleWeather(eventData.data));
          break;
        case "skill-fallback_unknown.neongeckocom":
          props.callback(handleUnknown(eventData.data));
          break;
        default:
          break;
      }
      if (
        Object.keys(eventData.data).includes("title") &&
        Object.keys(eventData.data).includes("text")
      ) {
        console.log(`Found TextFrame event: ${JSON.stringify(eventData.data)}`);
        props.callback(handleShowText(eventData.data));
      }
      if (Object.keys(eventData.data).includes("url")) {
        console.log(`Found HTMLFrame event: ${JSON.stringify(eventData.data)}`);
        props.callback(handleShowHtml(eventData.data));
      }
      if (Object.keys(eventData.data).includes("image")) {
        console.log(
          `Found ImageFrame event: ${JSON.stringify(eventData.data)}`
        );
        props.callback(handleShowImage(eventData.data));
      }
      // TODO: Input Box (skill-user_settings.neongeckocom)
    }
  };
  return null;
}

function handleShowText(data) {
  // return <ShowTextComponent data={data} />;
  return <TextFrameComponent data={data} />;
}

function handleShowImage(data) {
  // TODO: Test, since no working skills seem to use this
  // AnimatedFrameComponent is used by the Wikipedia skill, however
  return <ImageFrameComponent data={data} />;
}

function handleShowHtml(data) {
  return <HTMLFrameComponent data={data} />;
}

function handleUnknown(data) {
  return <UnknownComponent data={data} />;
}

function handleWeather(data) {
  // TODO: Change to OVOS weather
  return <Weather data={data} />;
}

export default MycroftMessageBus;
