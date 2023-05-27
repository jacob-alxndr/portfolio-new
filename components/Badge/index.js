import styles from "@styles/Badge/index.module.scss";

export default function Badge({ data }) {
  const { title } = data;
  return <div className={styles.badge}>{title}</div>;
}
