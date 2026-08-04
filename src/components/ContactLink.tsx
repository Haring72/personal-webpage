import React, { useState } from "react";

export default function ContactLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "4px",
        fontSize: "13px",
        color: hovered ? "#e8f0fe" : "#7fa5c8",
        background: hovered
          ? "1px solid rgba(59, 130, 246, 0.1)"
          : "transparent",
        border: hovered
          ? "1px solid rgba(59, 130, 246, 0.3)"
          : "1px solid transparent",
        textDecoration: "none",
        transition: "all 0.18s ease",
        fontFamily: "'Inter', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </a>
  );
}
