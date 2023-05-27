/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "../../Button";
import styles from "@styles/GlobalNavigation/index.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useStore } from "@lib/store";
// import debounce from "lodash.debounce";
import { BREAKPOINT_TABLET } from "@utils/breakpoints";
// import gsap from 'gsap';

const GlobalNavigation = (props) => {
  const { classes } = props;
  // const lenis = useStore(({ lenis }) => lenis);
  // const drawerIsOpen = useStore(({ drawerIsOpen }) => drawerIsOpen);
  const navigationData = useStore(({ navigationData }) => navigationData);

  const router = useRouter();
  const primary = navigationData?.primary || props.primary;
  const [mobileActive, setMobileActive] = useState(false);
  console.log("navigationData", navigationData);
  const setUpTimeline = () => {};
  const setUp = (resize) => {};
  const handleClick = () => {};
  const checkScroll = ({ scroll, direction }) => {};
  useEffect(() => {}, []);

  return (
    <header className={classNames(styles.header, classes, "padding-x-lg")}>
      <nav
        className={classNames(
          styles.nav
          // { [styles["is-mobile"]]: isMobile },
          // { [styles["is-active"]]: mobileActive },
        )}
      >
        <div className={classNames(styles.navContent)}>
          {primary &&
            primary?.map((button) => {
              return (
                <div
                  key={button?.buttonId}
                  className={classNames(
                    // {
                    // [styles["hide"]]:
                    // (!isMobile && button?.buttonText === "Home") ||
                    // (!isMobile && button?.buttonText === "Contact"),
                    // },
                    "js-menu-item"
                  )}
                >
                  <Button
                    data={button}
                    attr={{ ["data-text"]: button?.buttonText }}
                    classes={classNames(styles.link, {
                      [styles.active]: router.asPath === button?.buttonUrl,
                    })}
                    // All default style links should not have animation or special styling
                    {...(button?.buttonStyle === "default" && {
                      clean: true,
                    })}
                  />
                </div>
              );
            })}
        </div>
      </nav>
    </header>
  );
};

export default GlobalNavigation;
