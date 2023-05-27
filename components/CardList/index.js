import classNames from "classnames";
import styles from "../../styles/components/CardList/index.module.scss";
import CardPreview from "@components/CardPreview";

export default function CardList(props) {
  const {
    eyebrow,
    title,
    cards,
    titleSize,
    verticalPaddingTop,
    verticalPaddingBottom,
    verticalPaddingTopMobile,
    verticalPaddingBottomMobile,
    classes,
  } = props;
  console.log("CardList", props);
  return (
    <div
      id={title}
      className={classNames(
        styles.container,
        // styles[`${variant}`],
        // styles[`align--${alignment}`],
        // "padding-x-sm",
        "padding-x-lg",
        `u-vertical-padding--top-${verticalPaddingTop}`,
        `u-vertical-padding--bottom-${verticalPaddingBottom}`,
        {
          [`u-vertical-padding--top-${verticalPaddingTopMobile}-mobile`]:
            verticalPaddingTopMobile,
        },
        {
          [`u-vertical-padding--bottom-${verticalPaddingBottomMobile}-mobile`]:
            verticalPaddingBottomMobile,
        },
        classes
      )}
    >
      <div className={styles.heading}>
        {eyebrow && <span>{eyebrow}</span>}
        {title && (
          <div className={classNames(styles.title, `u-heading--${titleSize}`)}>
            {title}
          </div>
        )}
      </div>

      {cards && (
        <div className={styles.content}>
          {cards?.map((c, i) => (
            <CardPreview data={c} key={c?.id || i} />
          ))}
        </div>
      )}
    </div>
  );
}
