import React from "react";

export default function PlatformCard({ name, color }) {
  return (
    <div className="platform-card">
      <h2 style={{ color: color }}>{name}</h2>
    </div>
  );
}
