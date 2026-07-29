import React from "react";

type Props = {
  title: string;
  description: string;
  icon: string;
  accent: string;
};

export default function ServiceItem({
  title,
  description,
  icon,
  accent,
}: Props) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "6px",
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          color: accent,
          marginBottom: "10px",
        }}
      >
        {icon}
      </div>
      <h4
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 600,
          fontSize: "15px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#e8f0fe",
          margin: "0 0 8px",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "13px",
          lineHeight: 1.65,
          color: "#7fa5c8",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
