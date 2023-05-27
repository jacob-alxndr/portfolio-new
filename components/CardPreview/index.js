import Image from "next/image";
import Link from "next/link";
import styles from "@styles/CardPreview/index.module.scss";
import classNames from "classnames";
import { renderButtons } from "@components/Button/utils";
export default function CardPreview({ data }) {
  return (
    <div>
      <div
      // Link
      // URL Object
      // href={{
      //   pathname: "/project/[slug]",
      //   query: { slug: data?.slug },
      // }}
      // or
      // URL Path
      // href={`/project/${data?.slug}`}
      >
        <div className={styles.card}>
          <div className={styles.media}>
            {data?.backgroundMedia?.map((img, i) => (
              <Image
                key={img?.id}
                src={img?.backgroundImage?.url}
                width={800}
                height={260}
                alt={data?.title}
              />
            ))}
          </div>

          <div className={styles.content}>
            {data?.eyebrow && (
              <span className={styles.eyebrow}>{data?.eyebrow}</span>
            )}
            <h3 className={styles.title}>{data?.title}</h3>
            <span className={styles.subtitle}>{data?.subtitle}</span>
            <div className={styles.description}>
              {data?.description}
              {/* <Markdown>{content}</Markdown> */}
            </div>
            {data?.buttons && (
              <div className={classNames(styles.buttons, "js-sub-content")}>
                {renderButtons(data?.buttons)}
              </div>
            )}
            {/* {renderButtons(buttons, styles["card-actions"])} */}
          </div>
        </div>
      </div>
    </div>
  );
}
