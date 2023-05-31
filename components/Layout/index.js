import classNames from "classnames";
import styles from "@styles/Layout/index.module.scss";
import mapping from "./mapping";
import { useEffect, useRef, useState } from "react";
import { StructuredText } from "react-datocms";
import ExperienceList from "@components/ExperienceList";
import Markdown from "@components/Utilities/Markdown";
import { gsap } from "gsap";
import { useStore } from "@lib/store";
import Button from "@components/Utilities/Button";
// import SplitText from "@components/Utilities/SplitText";
const Layout = (props) => {
  const [data, setData] = useState(props);
  const elementRef = useRef(null);
  const listRef = useRef();
  const { eyebrow, title, description, bio, titleSize, experience, links } =
    data;
  const tl = gsap.timeline();
  const lenis = useStore(({ lenis }) => lenis);

  useEffect(() => {
    const titleEl = elementRef.current;
    // tl.formTo(titleEl, {
    //   y: "100px",
    //   ease: "Power4.easeInOut",
    //   duration: 1.5,
    // });
    // let ctx = gsap.context(() => {
    //   tl.fromTo(
    //     titleEl,
    //     { autoAlpha: 0, y: 0 },
    //     { autoAlpha: 1, y: 0, duration: 1 }
    //   );
    //   console.log("titleEl", titleEl);
    // });
    // return () => ctx.revert(); // <- cleanup!
  }, []);

  return (
    <div className={classNames(styles.container, "padding-x-lg")}>
      <div className={classNames(styles.header)}>
        <div className={styles.content}>
          <div
            className={classNames(styles.title, `u-heading--${titleSize}`)}
            ref={elementRef}
          >
            {title}
            {/* <SplitText copy={title} role={"heading"} /> */}
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
                onClick={() => {
                  const list = listRef.current.children;
                  lenis.scrollTo(list[i], {
                    offset: -90,
                    lerp: 0.1,

                    lock: true,
                  });
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

      <div className={styles.column}>
        <div className={styles.description}>
          <Markdown>{bio}</Markdown>
        </div>
        <div className={styles.lists} ref={listRef}>
          {experience &&
            experience.map((item, i) => {
              const { id } = item;

              return <ExperienceList key={id} data={item} ref={listRef} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
