import React from "react";
import PlatformCard from "./PlatformCard";

const platforms = [
  { id: 1, name: "coursera", color: "#0056D2" },
  { id: 2, name: "Quizlet", color: "#4255FF" },
  { id: 3, name: "UDACITY", color: "#01B3E3" },
];

export default function PlatformList() {
  return (
    <div className="platform-list">
      {platforms.map((platform) => (
        <PlatformCard
          key={platform.id}
          name={platform.name}
          color={platform.color}
        />
      ))}
    </div>
  );
}
