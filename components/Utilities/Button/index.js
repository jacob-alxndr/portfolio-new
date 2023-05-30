import React, { useRef } from "react";
import classNames from "classnames";
import ButtonExternalLink from "./button-external-link";
import ButtonInternalLink from "./button-internal-link";
// import PropTypes from 'prop-types';
// import gsap from 'gsap';
// eslint-disable-next-line import/no-cycle
// import ButtonDrawer from './button-drawer';
// eslint-disable-next-line import/no-cycle
// import Media from '../Media';

const Button = ({
  data,
  children,
  classes,
  id,
  attr,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onSubmit,
  clean,
  tabIndex,
  role,
}) => {
  const state = useRef({
    pos: {
      x: 0,
      y: 0,
    },
    force: {
      default: 5,
      primary: 10,
    },
  });
  const el = useRef();
  // const mask = useRef();
  const label = useRef();

  const setClasses = () => {
    let buttonStyleClass = null;

    switch (data.buttonStyle) {
      case "primary":
        buttonStyleClass = "c-button--primary";
        break;
      case "primary-subscription":
        buttonStyleClass = "c-button--primary-subscription";
        break;
      case "secondary":
        buttonStyleClass = "c-button--secondary";
        break;
      case "tertiary":
        buttonStyleClass = "c-button--tertiary";
        break;
      case "contained-white":
        buttonStyleClass = "c-button--contained-white";
        break;
      case "default":
      default:
        // Default is intentional supposed to be blank as it should be the same as no selection
        buttonStyleClass = "c-button--default";
        break;
    }
    return clean
      ? classes
      : classNames(
          "c-button",
          classes,
          `c-button--${data.buttonType}`,
          buttonStyleClass
        );
  };

  const getBtnContent = () => {
    const buttonContent = data.buttonText && (
      <span
        className="c-button__label"
        data-inner-text={data.buttonText}
        role="presentation"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: `${data.buttonText}` }}
        ref={label}
      >
        {/* {data.buttonText} */}
      </span>
    );

    // const buttonMedia = data?.buttonMedia ? (
    //   <Media data={data?.buttonMedia} />
    // ) : null;
    return (
      <React.Fragment>
        {/* {buttonMedia} */}
        {data.buttonText ? buttonContent : null}
        {children}
        <div
          className="c-button__mask"
          // ref={mask}
        />
      </React.Fragment>
    );
  };

  const handleOnSubmit = (e) => {
    if (onSubmit) {
      onSubmit(e);
    }
  };
  const handleOnClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e) => {
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  const handleMouseMove = (e) => {
    const buttonType = data.buttonStyle === "primary" ? "primary" : "default";

    moveTarget(e, el.current, label.current, buttonType);
  };

  const handleMouseLeave = (e) => {
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };

  if (!data) {
    return null;
  }
  switch (data?.buttonType) {
    case "external":
      return (
        <ButtonExternalLink
          ref={el}
          data={data}
          getBtnContent={getBtnContent}
          handleOnClick={handleOnClick}
          setClasses={setClasses}
          attr={attr}
          clean={clean}
          {...(onMouseEnter && {
            handleMouseEnter: handleMouseEnter,
          })}
          {...(onMouseLeave && {
            handleMouseLeave: handleMouseLeave,
          })}
          {...(onMouseMove && { handleMouseMove: handleMouseMove })}
        />
      );
    case "internal":
      return (
        <ButtonInternalLink
          ref={el}
          data={data}
          getBtnContent={getBtnContent}
          handleOnClick={handleOnClick}
          setClasses={setClasses}
          attr={attr}
          clean={clean}
          {...(onMouseEnter && {
            handleMouseEnter: handleMouseEnter,
          })}
          {...(onMouseLeave && {
            handleMouseLeave: handleMouseLeave,
          })}
          {...(onMouseMove && { handleMouseMove: handleMouseMove })}
        />
      );
    case "no-action":
      return (
        <button
          {...(id && { id: id })}
          ref={el}
          className={setClasses()}
          onClick={handleOnClick}
          {...(!clean && { "data-animation": "button" })}
          {...attr}
          {...(onMouseEnter && {
            onMouseEnter: handleMouseEnter,
          })}
          {...(onMouseMove && { onMouseMove: handleMouseMove })}
          {...(onMouseLeave && { onMouseLeave: handleMouseLeave })}
          tabIndex={tabIndex || 0}
          aria-label={data?.aria?.label || data.buttonText}
          role={role || "button"} // Needed for screen readers
          {...(data?.aria?.selected && {
            "aria-selected": data?.aria?.selected,
          })}
          {...(data?.aria?.controls && {
            "aria-controls": data?.aria?.controls,
          })}
        >
          {getBtnContent()}
        </button>
      );
    default:
      return "Missing Button Type";
  }
};

export default Button;
