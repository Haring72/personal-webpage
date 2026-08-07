import React from "react";
import styles from "./ContactLink.module.css";

export default function ContactLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} aria-label={label} className={styles.link}>
      {children}
    </a>
  );
}
