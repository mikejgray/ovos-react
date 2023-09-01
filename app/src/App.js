import React, { useState } from "react";
import ContentWindow from "./components/ContentWindow.js";
import MycroftMessageBus from "./components/MycroftMessageBus.js";
import "./App.css";

// gui.value.set
export const sampleData = {
  components: ["idle"],
  component_focus: 0,
  wallpaper_path:
    "/home/neon/venv/lib/python3.7/site-packages/skill_ovos_homescreen/ui/wallpapers/",
  selected_wallpaper: "background-01.png",
  notification: {},
  notification_model: {
    storedmodel: [
      {
        action: "update.gui.install_update",
        callback_data: {
          notification: "Core Update Available: v 23.8.18a7",
        },
        duration: 10,
        sender: "skill-update.neongeckocom",
        style: "info",
        text: "Core Update Available: v 23.8.18a7",
        timestamp: 1692622868.6815064,
        type: "transient",
      },
    ],
    count: 1,
  },
  system_connectivity: "offline",
  applications_model: [
    {
      name: "Home Assistant",
      thumbnail: "/home/neon/.local/share/icons/ovos-phal-homeassistant.svg",
      action: "ovos-PHAL-plugin-homeassistant.home",
    },
    {
      name: "OCP",
      thumbnail: "/home/neon/.local/share/icons/OCP.png",
      action: "ovos.common_play.home",
    },
  ],
  dashboard_model: {
    collection: [
      {
        id: "20f1af76-edb8-472c-8e31-62800ac0e64c",
        // url: "file:///home/neon/.local/share/neon/filesystem/skills/skill-ovos-homescreen.openvoiceos/DemoCard.qml",
        cellHeight: 5,
        cellWidth: 5,
      },
    ],
  },
  persistent_menu_hint: true,
  time_string: "8:33",
  date_string: "8/21/2023",
  weekday_string: "Monday",
  day_string: "21",
  month_string: "August",
  year_string: "2023",
  skill_examples: {
    examples: [
      "do you know any chuck norris jokes",
      "tell me a joke",
      "say a joke",
      "tell me a joke about dentists",
      "make me laugh",
      "do you know any jokes",
      "can you tell jokes",
    ],
  },
  skill_info_enabled: false,
  skill_info_prefix: false,
  rtl_mode: 0,
  dateFormat: "MDY",
  weather_api_enabled: true,
  weather_code: "icons/sun.svg",
};

const HOST = process.env.OVOS_HOST || "localhost";
const OWM_KEY = process.env.OWM_KEY;
if (!OWM_KEY) {
  console.error("OWM_KEY not set");
}

function App() {
  const [display, setDisplay] = useState(null);

  const updateDisplay = (data) => {
    setDisplay(data);

    // reset the display after 15 seconds
    setTimeout(() => {
      setDisplay(null);
    }, 15000);
  };

  return (
    <div className="App">
      <ContentWindow owm_key={OWM_KEY} display={display} />
      <MycroftMessageBus callback={updateDisplay} host={HOST} />
    </div>
    // TODO: Notifications (https://www.npmjs.com/package/react-notifications)
    // TODO: Notification icon
    // TODO: Top swipedown features
    // TODO: Settings - but that's not MVP, since it doesn't work for Qt right now either
  );
}

export default App;
