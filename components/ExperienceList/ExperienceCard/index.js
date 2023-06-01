import styles from "@styles/ExperienceCard/index.module.scss";
import classNames from "classnames";
import Badge from "@components/Utilities/Badge";
import { Image } from "react-datocms";
import { ConditionalWrapper } from "@utils/helpers";
export default function ExperienceCard({ data }) {
  const {
    eyebrow,
    title,
    subtitle,
    description,
    badges,
    hasExternalLink,
    image: { [0]: image },
  } = data;

  return (
    <div
      className={classNames(styles.card, { [styles.hasLink]: hasExternalLink })}
    >
      <ConditionalWrapper
        condition={hasExternalLink}
        wrapper={(children) => (
          <a target="_blank" href={`https://${title}`}>
            {children}
          </a>
        )}
      >
        {image?.image?.responsiveImage && (
          <div className={styles.image}>
            <Image
              alt={title}
              fadeInDuration={2000}
              lazyLoad={true}
              priority={true}
              data={image?.image?.responsiveImage}
            />
          </div>
        )}

        <div className={styles.content}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          {title && <span className={styles.title}>{title}</span>}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          {description && (
            <div className={styles.description}>{description}</div>
          )}
          <div className={styles.badges}>
            {badges.map((b) => (
              <Badge key={b?.id} data={b} />
            ))}
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  );
}
