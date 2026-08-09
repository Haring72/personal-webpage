import styles from "./ServiceItem.module.css";

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
    <div className={styles.item}>
      <div
        style={{
          color: accent,
        }}
        className={styles.icon}
      >
        {icon}
      </div>
      <h4 className={styles.itemTitle}>{title}</h4>
      <p className={styles.itemDescription}>{description}</p>
    </div>
  );
}
