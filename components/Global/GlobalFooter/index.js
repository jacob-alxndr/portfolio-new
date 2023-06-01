import React, { useEffect, useState } from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import classNames from "classnames";
import { renderButtons } from "@components/Utilities/Button/utils";
import Button from "@components/Utilities/Button";
import { useStore } from "@lib/store";
const GlobalFooter = (props) => {
  const footerData = useStore(({ footerData }) => footerData);
  const { pagesTitle } = footerData || props;
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    // const localTheme = localStorage.getItem("user-theme");
    // if (localTheme) {
    //   document.documentElement.setAttribute(
    //     "user-theme",
    //     JSON.parse(localTheme)
    //   );
    // } else {
    //   document.documentElement.setAttribute("user-theme", "dark");
    //   localStorage.setItem("user-theme", JSON.stringify("dark"));
    // }
  }, []);

  const handleClick = () => {
    const localTheme = localStorage.getItem("user-theme");
    if (localTheme === `"dark"`) {
      document.documentElement.setAttribute("user-theme", "light");
      localStorage.setItem("user-theme", JSON.stringify("light"));
    } else {
      document.documentElement.setAttribute("user-theme", "dark");
      localStorage.setItem("user-theme", JSON.stringify("dark"));
    }
  };
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
        <span className={styles.rule}> | </span>{" "}
        {process.env.NEXT_PUBLIC_SITE_NAME} &copy;
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default GlobalFooter;
