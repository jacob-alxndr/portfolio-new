import classNames from "classnames";
import styles from "@styles/Header/index.module.scss";
import { StructuredText } from "react-datocms";
import Button from "@components/Utilities/Button";
import React, { forwardRef } from "react";
import { useStore } from "@lib/store";
import { sendGTMEvent } from "@next/third-parties/google";
export default forwardRef(function Header({ props }, ref) {
  const lenis = useStore(({ lenis }) => lenis);
  const { title, links, description, titleSize, listRef, mobile } = props;
  return (
    <div className={classNames(styles.header)}>
      <div className={styles.content} ref={ref}>
        <div className={classNames(styles.title, `u-heading--${titleSize}`)}>{title}</div>
        <div className={styles.description}>
          <StructuredText data={description} />
        </div>
        <div className={styles.links}>
          {links.map((link, i) => (
            <Button
              key={i}
              data={link}
              //   attr={{ ["data-text"]: link?.buttonText }}
              onClick={() => {
                if (link.buttonUrl.includes("#")) {
                  const list = listRef.current.children;
                  lenis.scrollTo(list[i], {
                    offset: mobile ? -45 : -90,
                    lerp: 0.1,
                    lock: true,
                  });
                  return sendGTMEvent({ event: "buttonClicked", value: link.buttonText });
                } else return;
              }}
              // All default style links should not have animation or special styling
              {...(link?.buttonStyle === "default" && {
                clean: true,
              })}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
