import { useState } from "react";
import ServiceItem from "./ServiceItem";

type Service = { title: string; description: string; icon: string };

export default function CategoryPanel({
  label,
  summary,
  accent,
  services,
  index,
}: {
  label: string;
  summary: string;
  accent: string;
  services: Service[];
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: open
          ? `1px solid ${accent}55`
          : "1px solid rgba(59, 130, 246, 0.15)",
        borderRadius: "10px",
        background: open ? "rgba(8, 18, 40, 0.85)" : "rgba(8, 18, 38, 0.55)",
        backdropFilter: "blur(16px)",
        overflow: "hidden",
        transition: "border-color 0.25s, background 0.25s",
        boxShadow: open
          ? `0 0 40px ${accent}22`
          : "0 2px 16px rgba(0, 0, 0, 0.35)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "32px 36px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            border: `1.5px solid ${accent}`,
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "14px",
            color: accent,
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: "26px",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#e8f0fe",
              lineHeight: 1.1,
              marginBottom: "6px",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#7fa5c8",
              lineHeight: 1.5,
            }}
          >
            {summary}
          </div>
        </div>

        <div
          style={{
            flexShrink: 0,
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: open ? `${accent}22` : "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${open ? accent + "55" : "rgba(255, 255, 255, 0.08)"}`,
            transition: "all 0.25s",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? accent : "#7fa5c8"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? "800px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.45s cubic-beizer(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            borderTop: `1px solid ${accent}22`,
            padding: "32px 36px 36px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((svc) => (
            <ServiceItem
              key={svc.title}
              accent={accent}
              title={svc.title}
              description={svc.description}
              icon={svc.icon}
            ></ServiceItem>
          ))}
        </div>
      </div>
    </div>
  );
}
