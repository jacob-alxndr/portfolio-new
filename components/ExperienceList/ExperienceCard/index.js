import styles from "@styles/ExperienceCard/index.module.scss";
import classNames from "classnames";
import Badge from "@components/Badge";
import { Image } from "react-datocms";
export default function ExperienceCard({ data }) {
  const {
    eyebrow,
    title,
    subtitle,
    description,
    badges,
    image: { [0]: image },
  } = data;
  console.log("data", image?.image?.responsiveImage);
  return (
    <div className={styles.card}>
      {image?.image?.responsiveImage && (
        <div className={styles.image}>
          <Image alt={title} data={image?.image?.responsiveImage} />
        </div>
      )}

      <div className={styles.content}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        {title && <span className={styles.title}>{title}</span>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {description && <div className={styles.description}>{description}</div>}
        <div className={styles.badges}>
          {badges.map((b) => (
            <Badge key={b?.id} data={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
