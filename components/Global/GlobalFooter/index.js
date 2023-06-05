import React, { useEffect, useState } from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import classNames from "classnames";
import { renderButtons } from "@components/Utilities/Button/utils";
import Button from "@components/Utilities/Button";
import { useStore } from "@lib/store";
import { useTheme } from "next-themes";

const GlobalFooter = (props) => {
  const footerData = useStore(({ footerData }) => footerData);
  const { pagesTitle } = footerData || props;
  const { fbData } = props;
  const { theme, setTheme } = useTheme();
  const [fb, setFB] = useState(null);

  const handleClick = () => {
    if (theme === "system") setTheme("light");
    if (theme === "light") setTheme("system");
  };
  useEffect(() => {
    console.log(fbData);
    fbData?.then((res) => {
      console.log(res);
      setFB(res);
    });
  }, [fbData]);
  return (
    <footer
      id={pagesTitle}
      className={classNames(styles.container, "padding-x-lg")}
    >
      <div className={styles.content}>
        <Button
          data={{
            buttonType: "no-action",
            buttonStyle: "primary",
            buttonText: "Theme",
          }}
          onClick={handleClick}
          classes={styles.button}
        ></Button>
        <span className={styles.rule}> | </span>
        <span> {fb?.name}</span>
        <span>
          {process.env.NEXT_PUBLIC_SITE_NAME} &copy; {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default GlobalFooter;
