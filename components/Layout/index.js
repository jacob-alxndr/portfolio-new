import classNames from "classnames";
import styles from "@styles/Layout/index.module.scss";
import mapping from "./mapping";
import { useEffect, useState } from "react";
import { StructuredText } from "react-datocms";
import ExperienceList from "@components/ExperienceList";
import Markdown from "@components/Markdown";

import Button from "@components/Button";
const Layout = (props) => {
  const [data, setData] = useState(props);
  const { eyebrow, title, description, bio, titleSize, experience, links } =
    data;

  return (
    <div className={classNames(styles.container, "padding-x-lg")}>
      <div className={classNames(styles.header)}>
        <div className={styles.content}>
          <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
            {title}
          </div>
          <div className={styles.description}>
            <StructuredText data={description} />
          </div>
          <div className={styles.links}>
            {links.map((link, i) => (
              <Button
                key={i}
                data={link}
                attr={{ ["data-text"]: link?.buttonText }}
                // All default style links should not have animation or special styling
                {...(link?.buttonStyle === "default" && {
                  clean: true,
                })}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.description}>
          <Markdown>{bio}</Markdown>
        </div>
        <div className={styles.lists}>
          {experience &&
            experience.map((item) => {
              const { id } = item;
              console.log("id", item);
              return <ExperienceList key={id} data={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
