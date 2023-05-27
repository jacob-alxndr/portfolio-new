import classNames from "classnames";
import styles from "@styles/Hero/index.module.scss";
import mapping from "./mapping";
import { useEffect, useState } from "react";
import { StructuredText } from "react-datocms";
const Hero = (props) => {
  const [data, setData] = useState(props);
  const {
    eyebrow,
    title,
    subtitle,
    description,
    titleSize,
    backgroundColor,
    backgroundImage,
    backgroundMedia,
  } = data;

  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.header, "padding-x-lg")}>
        <div className={styles.content}>
          <div className={classNames(styles.eyebrow)}>{eyebrow}</div>
          <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
            {title}
          </div>
          <div className={styles.description}>
            <StructuredText data={description} />
          </div>
        </div>
      </div>

      <div
        className={styles.background}
        style={{
          backgroundColor: `${backgroundColor?.hex}`,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: `${backgroundMedia[0]?.horizontalAlignment} ${backgroundMedia[0]?.verticalAlignment}`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
