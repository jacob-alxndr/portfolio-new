import React, { useState } from "react";
import styles from "@styles/GlobalFooter/index.module.scss";
import classNames from "classnames";
import { renderButtons } from "@components/Utilities/Button/utils";
import Button from "@components/Utilities/Button";
import { useStore } from "@lib/store";
const GlobalFooter = (props) => {
  const footerData = useStore(({ footerData }) => footerData);
  const { pagesTitle } = footerData || props;
  const [theme, setTheme] = useState(false);

  const handleClick = () => {
    document.documentElement.setAttribute(
      "user-theme",
      theme ? "dark" : "light"
    );
    setTheme(!theme);
  };
  return (
    <footer
      id={pagesTitle}
      className={classNames(styles.container, "padding-x-lg")}
    >
      <div className={styles.content}>
        {process.env.NEXT_PUBLIC_SITE_NAME} &copy; {new Date().getFullYear()}{" "}
        <Button
          data={{
            buttonType: "no-action",
            buttonStyle: "primary",
          }}
          onClick={handleClick}
          classes={styles.button}
        >
          {theme ? "Dark" : "Light"} Theme
        </Button>
      </div>
    </footer>
  );
};

export default GlobalFooter;
