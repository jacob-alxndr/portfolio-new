import styles from "@styles/ExperienceList/index.module.scss";
import classNames from "classnames";
import ExperienceCard from "./ExperienceCard";
import { useStore } from "@lib/store";
import { forwardRef } from "react";
export default forwardRef(function ExperienceList({ data }, ref) {
  const { tagId, title, description, experienceItems } = data;

  return (
    <div className={styles.experienceList} id={tagId} ref={ref}>
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
});
