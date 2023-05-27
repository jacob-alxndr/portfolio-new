/* eslint-disable import/prefer-default-export */
import classNames from "classnames";
import Button from "./index";
// import Media from '../Media';

/**
 * Render list of buttons
 * @param buttons Array of mappped buttons to render
 * @param wrapperClasses  Additional CSS classes for buttons parent wrapper
 * @param buttonClasses Additional CSS classes for buttons
 * @param wrapperAttributes Additional html attributes for parent wrapper
 * @returns
 */

export const renderButtons = (
  buttons,
  wrapperClasses,
  buttonClasses,
  wrapperAttributes
) => {
  if (!buttons) return "";

  const buttonList = buttons.map((button, index) => (
    <Button key={index} data={button} classes={buttonClasses}>
      {/* {button?.media && (
        <Media type={button?.media?.type} data={button?.media} />
      )} */}
    </Button>
  ));

  return (
    <div
      className={classNames("c-actions", wrapperClasses)}
      {...wrapperAttributes}
    >
      {buttonList}
    </div>
  );
};

export const createText = () => {};
