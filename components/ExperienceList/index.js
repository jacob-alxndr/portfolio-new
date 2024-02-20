import styles from "@styles/ExperienceList/index.module.scss";
import classNames from "classnames";
import ExperienceCard from "./ExperienceCard";
import { useStore } from "@lib/store";
import { forwardRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default forwardRef(function ExperienceList({ data }, ref) {
  const { tagId, title, description, experienceItems } = data;

  const elementRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   const lists = Array.from(ref?.current?.children);
  //   lists.forEach((list) => {
  //     const childEls = Array.from(list.children);
  //     childEls.forEach((child) => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: child,
  //           markers: true,
  //           scrub: true,
  //           start: "top 90%", // when the top of the trigger hits 80% from the top of the viewport
  //           end: "80% 80%", // when 40% from the bottom of the trigger hits 70% from the bottom of the viewport
  //         },
  //       });
  //       if (ScrollTrigger.isInViewport(child, 0.5)) {
  //         gsap.set(child, { y: 0, opacity: 1 });
  //         return;
  //       }
  //       tl.set(child, { opacity: 0 });
  //       tl.scrollTrigger.refresh();
  //       tl.to(child, { opacity: 1, y: 0 });
  //     });
  //   });

  // let ctx = gsap.context(() => {
  //   tl.set(elements, { autoAlpha: 0, y: 10 });
  //   tl.to(elements, { autoAlpha: 1, y: 0, stagger: 0.2 });
  // });
  // return () => ctx.revert(); // <- cleanup!
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className={styles.experienceList} id={tagId} ref={ref}>
      <div className={styles.header}>
        {title && <span className={styles.title}>{title}</span>}
        {description && <div className={styles.description}>{description}</div>}
      </div>

      {experienceItems && experienceItems.map((item, i) => <ExperienceCard key={i} data={item} />)}
    </div>
  );
});
