import styles from "@styles/ExperienceCard/index.module.scss";
import classNames from "classnames";
import Badge from "@components/Utilities/Badge";
import { Image } from "react-datocms";
import Link from "next/link";
export default function ExperienceCard({ data }) {
  const {
    eyebrow,
    title,
    subtitle,
    description,
    badges,
    image: { [0]: image },
  } = data;
  const ConditionalWrapper = ({ condition, wrapper, children }) =>
    condition ? wrapper(children) : children;
  return (
    <div className={styles.card}>
      {/* <Link href={title.includes("www") ? `https://${title}` : null}> */}

      <ConditionalWrapper
        condition={
          title.includes(".com") ||
          title.includes(".app") ||
          title.includes(".org") ||
          title.includes(".photo") ||
          title.includes(".la")
        }
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
              lazyLoad={true}
              priority={true}
              fadeInDuration={2000}
              // layout="fill"
              // objectFit="cover"
              // objectPosition="50% 50%"
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
      {/* </Link> */}
    </div>
  );
}
