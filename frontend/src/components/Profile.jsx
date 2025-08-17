import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-card">
      <h2 className="profile-title">Member Persona</h2>

      <div className="profile-section">
        <h3>👤 Basic Info</h3>
        <p><strong>Name:</strong> Keily Summers</p>
        <p><strong>Age:</strong> 32, Female</p>
        <p><strong>Residence:</strong> Singapore (frequent travel to Australia, Japan, Dubai, India)</p>
        <p><strong>Occupation:</strong> Senior Interior Architect</p>
      </div>

      <div className="profile-section">
        <h3>⚕️ Chronic Conditions</h3>
        <p>Dust Allergy (seasonal flare-ups, especially during travel & construction site visits)</p>
        <p>Mild Scoliosis (causing occasional lower back pain)</p>
      </div>

      <div className="profile-section">
        <h3>🎯 Health Goals</h3>
        <p>Reduce dust allergy flare-ups through environment & immunity management.</p>
        <p>Strengthen back and core to prevent scoliosis pain.</p>
        <p>Improve sleep quality & stress levels before trying for pregnancy next year.</p>
        <p>Build stamina for frequent travel.</p>
      </div>

      <div className="profile-section">
        <h3>⌚ Wearables</h3>
        <p>Apple Watch + Oura Ring</p>
      </div>

      <div className="profile-section">
        <h3>💡 Personality</h3>
        <p>Organized but anxious, likes detailed but actionable plans.</p>
      </div>

      <div className="profile-section">
        <h3>👥 Support System</h3>
        <p>Lives with fiancé, works with a small team of assistants for travel & work schedules.</p>
      </div>
    </div>
  );
};

export default Profile;
