import styles from "@styles/ExperienceCard/index.module.scss";
import classNames from "classnames";
import Badge from "@components/Utilities/Badge";
import { Image } from "react-datocms";
import { ConditionalWrapper } from "@utils/helpers";
import { useEffect, useRef, useState } from "react";
import debounce from "lodash.debounce";
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
  const cardRef = useRef();
  const cardImgRef = useRef();
  const requestRef = useRef();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isMouse, setMouse] = useState(false);
  const [frame, setFrame] = useState({});

  const handleResize = () => {
    const cardEl = cardRef?.current;
    setFrame({
      positionY: 0,
      positionX: 0,
      x: cardEl?.getBoundingClientRect().x,
      y: cardEl?.getBoundingClientRect().y + window.scrollY,
      width: cardEl?.getBoundingClientRect().width,
      height: cardEl?.getBoundingClientRect().height,
      top: cardEl?.getBoundingClientRect().top + window.scrollY,
      right: cardEl?.getBoundingClientRect().right,
    });
    setMouse(false);
  };

  useEffect(() => {
    const cardEl = cardRef?.current;

    setFrame({
      positionY: 0,
      positionX: 0,
      x: cardEl?.getBoundingClientRect().x,
      y: cardEl?.getBoundingClientRect().y + window.scrollY,
      width: cardEl?.getBoundingClientRect().width,
      height: cardEl?.getBoundingClientRect().height,
      top: cardEl?.getBoundingClientRect().top + window.scrollY,
      right: cardEl?.getBoundingClientRect().right,
    });

    const debounced = debounce(handleResize, 10);
    window.addEventListener("resize", debounced, { passive: true });
    window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", debounced, { passive: true });
      // cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 1. Variables

  //2. Functions
  const normalize = (value, min, max) => (12 * (value - min)) / (max - min);

  function updateAxis(e) {
    setMouse(true);
    animate();
    setX(e.pageX);
    setY(e.pageY);
  }

  function removeAnimation(e) {
    const cardImage = cardImgRef?.current;
    setMouse(false);
    cardImage.style.transform = `rotateY(0deg) rotateX(0deg)`;
  }

  function animate() {
    const cardImage = cardImgRef?.current;

    if (isMouse) {
      //X
      frame.positionX = normalize(x, frame.x + frame.width / 2, frame.right).toFixed(0);
      //Y
      frame.positionY = normalize(y, frame.y + frame.height / 2, frame.top).toFixed(0);
      cardImage.style.transform = `rotateX(${frame.positionY}deg) rotateY(${frame.positionX}deg)`;
    } else {
      return false;
    }
  }

  return (
    <div className={classNames(styles.card, { [styles.hasLink]: hasExternalLink })}>
      <ConditionalWrapper
        condition={hasExternalLink}
        wrapper={(children) => (
          <a target="_blank" href={`https://${title}`}>
            {children}
          </a>
        )}
      >
        {image?.image?.responsiveImage && (
          <div
            onMouseMove={updateAxis}
            onMouseOut={removeAnimation}
            style={{ perspective: "1000px" }}
            ref={cardRef}
          >
            <div className={styles.image} ref={cardImgRef}>
              <Image
                alt={title}
                fadeInDuration={2000}
                // lazyLoad={true}
                priority={true}
                data={image?.image?.responsiveImage}
              />
            </div>
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
      </ConditionalWrapper>
    </div>
  );
}
