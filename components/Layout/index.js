import classNames from "classnames";
import styles from "@styles/Layout/index.module.scss";
import { useEffect, useRef, useState } from "react";
import ExperienceList from "@components/ExperienceList";
import Markdown from "@components/Utilities/Markdown";
import { gsap } from "gsap";
import { BREAKPOINT_TABLET } from "@utils/breakpoints";
import Header from "@components/Header";
import mapping from "./mapping";

const Layout = (props) => {
  const [data, setData] = useState(props);
  const [mobile, setMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  const elementRef = useRef(null);
  const descRef = useRef(null);
  const listRef = useRef();
  const tl = gsap.timeline();
  const { title, description, bio, titleSize, experience, links } = data;

  const handleResize = () => {
    if (windowSize === window.innerWidth) return;
    window.innerWidth <= BREAKPOINT_TABLET
      ? setMobile(!mobile) && setWindowSize(window.innerWidth)
      : setMobile(mobile);
  };

  const throttle = (callback, delay = 100) => {
    let shouldWait = false;

    return (...args) => {
      if (shouldWait) return;
      callback(...args);
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    };
  };

  useEffect(() => {
    handleResize();
    const throttled = throttle(handleResize, 100);
    window.addEventListener("resize", throttled, { passive: true });

    return () => window.removeEventListener("resize", throttled, { passive: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const elements = elementRef.current.children;
    // const descEls = descRef.current.children;
    let ctx = gsap.context(() => {
      tl.addLabel("start");
      tl.set(elements, { autoAlpha: 0, y: 10 });
      // tl.set(descEls, { autoAlpha: 0, y: 10 });
      tl.to(elements, { delay: 1, autoAlpha: 1, y: 0, stagger: 0.3 }, "start");
      // tl.to(descEls, { delay: 1, autoAlpha: 1, y: 0, stagger: 0.3 }, "start");
    });
    return () => ctx.revert(); // <- cleanup!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(styles.container, "padding-x-lg")}>
      <Header props={{ title, links, description, titleSize, listRef, mobile }} ref={elementRef} />
      <div className={styles.column}>
        {bio && (
          <div ref={descRef} className={styles.description}>
            <Markdown>{bio}</Markdown>
          </div>
        )}
        {experience && (
          <div className={styles.lists} ref={listRef}>
            {experience.map((item, i) => {
              const { id } = item;
              return <ExperienceList key={id} data={item} ref={listRef} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
