import styles from "@styles/ExperienceList/index.module.scss";
import classNames from "classnames";
import ExperienceCard from "./ExperienceCard";
export default function ExperienceList({ data }) {
  const { tagId, title, description, experienceItems } = data;
  console.log("ExperienceList", data);
  return (
    <div className={styles.experienceList} id={tagId}>
      <div className={styles.header}>
        {title && <span className={styles.title}>{title}</span>}
        {description && <div className={styles.description}>{description}</div>}
      </div>

      {experienceItems &&
        experienceItems.map((item) => (
          <ExperienceCard key={item?.id} data={item} />
        ))}
    </div>
  );
}
