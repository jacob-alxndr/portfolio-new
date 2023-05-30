import React from "react";
// import PropTypes from "prop-types";

const ButtonExternalLink = React.forwardRef(
  (
    {
      data,
      setClasses,
      handleOnClick,
      attr,
      handleMouseEnter,
      handleMouseLeave,
      handleMouseMove,
      getBtnContent,
      tabIndex,
      clean,
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={setClasses()}
        href={data.buttonUrl}
        aria-label={data?.aria?.label || data.buttonText}
        rel="noreferrer noopener"
        target={data?.buttonTarget}
        tabIndex={tabIndex || 0}
        role="link"
        {...(!clean && { "data-animation": "button" })}
        {...attr}
        {...(handleOnClick && { onClick: handleOnClick })}
        {...(handleMouseEnter && {
          onMouseEnter: handleMouseEnter,
        })}
        {...(handleMouseLeave && { onMouseLeave: handleMouseLeave })}
        {...(handleMouseMove && { onMouseMove: handleMouseMove })}
      >
        {getBtnContent()}
      </a>
    );
  }
);

ButtonExternalLink.displayName = "Button External Link";

// ButtonExternalLink.propTypes = {
//   btnData: PropTypes.object,
//   getBtnContent: PropTypes.func,
//   /**
//    * HTML attributes that should be applied to button
//    */
//   attr: PropTypes.object,
//   handleOnClick: PropTypes.func,
//   handleMouseEnter: PropTypes.func,
//   handleMouseLeave: PropTypes.func,
//   handleMouseMove: PropTypes.func,
//   setClasses: PropTypes.func,
//   /**
//    * Should no default styles be applied?
//    */
//   clean: PropTypes.bool,
// };

export default ButtonExternalLink;
