import classNames from "classnames";
import styles from "@styles/Layout/index.module.scss";
import mapping from "./mapping";
import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";
import { StructuredText } from "react-datocms";
import ExperienceList from "@components/ExperienceList";
import Markdown from "@components/Utilities/Markdown";
import { gsap } from "gsap";
import { useStore } from "@lib/store";
import Button from "@components/Utilities/Button";
import { BREAKPOINT_TABLET } from "@utils/breakpoints";
const Layout = (props) => {
  const lenis = useStore(({ lenis }) => lenis);
  const [data, setData] = useState(props);
  const [mobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  const elementRef = useRef(null);
  const listRef = useRef();
  const tl = gsap.timeline();
  const { title, description, bio, titleSize, experience, links } = data;

  const handleResize = () => {
    if (windowSize === window.innerWidth) return;
    window.innerWidth <= BREAKPOINT_TABLET
      ? setMobile(!mobile) && setWindowSize(window.innerWidth)
      : setMobile(mobile);
  };

  useEffect(() => {
    handleResize();
    const debounced = debounce(handleResize, 100);
    window.addEventListener("resize", debounced, { passive: true });

    return () =>
      window.removeEventListener("resize", debounced, { passive: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const elements = elementRef.current.children;
    let ctx = gsap.context(() => {
      tl.set(elements, { autoAlpha: 0, y: 10 });
      tl.to(elements, { autoAlpha: 1, y: 0, stagger: 0.2 });
    });
    return () => ctx.revert(); // <- cleanup!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(styles.container, "padding-x-lg")}>
      <div className={classNames(styles.header)}>
        <div className={styles.content} ref={elementRef}>
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
                onClick={() => {
                  const list = listRef.current.children;
                  console.log("mobile", mobile);
                  lenis.scrollTo(list[i], {
                    offset: mobile ? -45 : -90,
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
