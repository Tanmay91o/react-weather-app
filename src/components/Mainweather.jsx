import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Mainweather = ({ weatherData }) => {
  const temperatureCelsius = weatherData?.main?.temp || "N/A";
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A";
  const cityName = weatherData?.name || "city not available";
  const countryName = weatherData?.sys?.country || "country not available";
  const timestamp = weatherData?.dt || null;

  const currentDate = timestamp
    ? new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })
    : "Date not available";

  const renderTemperatureIcon = () => {
    if (temperatureCelsius > 23) {
      return (
        <WbSunnyIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "orange" }}
        />
      );
    } else if (temperatureCelsius < 10) {
      return (
        <AcUnitIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "blue" }}
        />
      );
    } else {
      return (
        <CloudIcon
          style={{ marginLeft: "10px", fontSize: "3rem", color: "gray" }}
        />
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#4B5563",
        color: "white",
        borderRadius: "0.5rem",
        width: "160px",
        padding: "30px",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>now</div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "35px",
          fontWeight: "bold",
        }}
      >
        {temperatureCelsius}°c
        {renderTemperatureIcon()}
      </div>
      <div style={{ fontSize: "20px", fontWeight: "50", marginTop: "8px" }}>
        {weatherDescription}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <CalendarMonthIcon />
          {currentDate}
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "4px" }}
        >
          <LocationOnIcon />
          {cityName}, {countryName}
        </div>
      </div>
    </div>
  );
};

export default Mainweather;
