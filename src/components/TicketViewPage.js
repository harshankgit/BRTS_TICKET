// TicketViewPage.js
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import scanImage from "../assets/scan.png";
const TicketViewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { details, timeLeft } = location.state || {}; // Get data passed via navigation

  // Format the time in HH:MM:SS format
  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  // Redirect to home page if no ticket details are found
  if (!details) return <div>No details found</div>;

  return (
    <div className="ticket-view-page">
      <h1>View Your Ticket</h1>

      {/* Ticket Details Section */}
      {/* <div className="ticket-details">
        <p>
          <b>Source:</b> {details.source}
        </p>
        <p>
          <b>Destination:</b> {details.destination}
        </p>
        <p>
          <b>Start Time:</b> {new Date(details.startTime).toLocaleString()}
        </p>
        <p>
          <b>Time Remaining:</b> {formatTime(timeLeft)}
        </p>
      </div> */}

      {/* QR Code for Scanning */}
      <div className="scanner">
        <h3>Scan Your Ticket at Entry & Exit Points</h3>

        {/* Display a static QR code image */}
        <div className="qr-code">
          <h4>QR Code:</h4>
        </div>

        {/* Placeholder for actual scanner (dynamic QR scanning) */}
        <div className="qr-scanner">
          {/* <h4>Scan Now:</h4> */}
          <img src={scanImage} alt="Scanner" width="200" />
          {/* You could integrate a scanner library here (e.g., `react-qr-reader` or `react-qr-scanner`) */}
        </div>
      </div>

      {/* Ticket Validity and Countdown Timer */}
      <div className="ticket-validity">
        <p>Your ticket is valid for:</p>
        <p id="countdown" className="timer">
          {formatTime(timeLeft)}
        </p>
        <button onClick={() => navigate("/ticket")} className="view-ticket">
          View Ticket Details Again
        </button>
      </div>
    </div>
  );
};

export default TicketViewPage;
