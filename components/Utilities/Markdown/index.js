import React from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
// import styles from "../../styles/components/Markdown/index.module.scss";

const Markdown = ({ children, customComponents, classes }) => (
  <ReactMarkdown
  // className={classNames(styles.container, classes)}
  // components={{
  //   ...customComponents,
  //   // Make sure all links use our global button component for feature parity
  //   a({ children: componentChildren, href }) {
  //     const buttonData = getButtons([
  //       {
  //         link: href,
  //         openInNewTab: true,
  //         buttonType: 'external',
  //       },
  //     ]);
  //     return <Button data={buttonData?.[0]}>{componentChildren}</Button>;
  //   },
  // }}
  >
    {children}
  </ReactMarkdown>
);
export default Markdown;
