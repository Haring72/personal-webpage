import { useState } from "react";
import ServiceItem from "./ServiceItem";
import styles from "./CategoryPanel.module.css";

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
        background: open ? "rgba(8, 18, 40, 0.85)" : "rgba(8, 18, 38, 0.55)",
        boxShadow: open
          ? `0 0 40px ${accent}22`
          : "0 2px 16px rgba(0, 0, 0, 0.35)",
      }}
      className={styles.panel}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={styles.toggleButton}
      >
        <div
          style={{
            border: `1.5px solid ${accent}`,
            color: accent,
          }}
          className={styles.indexBadge}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className={styles.infoToggle}>
          <div className={styles.label}>{label}</div>
          <div className={styles.summary}>{summary}</div>
        </div>

        <div
          style={{
            background: open ? `${accent}22` : "rgba(255, 255, 255, 0.04)",
            border: `1px solid ${open ? accent + "55" : "rgba(255, 255, 255, 0.08)"}`,
          }}
          className={styles.toggleIcon}
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
        }}
      >
        <div className={styles.panelContent}>
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
