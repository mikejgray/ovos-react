import React from "react";
import Clock from "./widgets/Clock.js";
import DateWidget from "./widgets/Date.js";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import "./Sidebar.css";

function Sidebar(props) {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: props.owmKey,
    lat: process.env.LAT, // TODO: Props
    lon: process.env.LONG,
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  });
  return (
    <div className="sidebar">
      <DateWidget />
      {/* TODO: Responsive from bus https://www.npmjs.com/package/react-open-weather#Customizations */}
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="San Antonio"
        unitsLabels={{ temperature: "F", windSpeed: "Mi/h" }}
        showForecast={false}
      />
      <Clock />
    </div>
  );
}

export default Sidebar;
