import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ButtonInternalLink = React.forwardRef(
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
      clean,
    },
    ref
  ) => {
    return (
      /**
       *  Setting prefetch to false changes the behavior from fetching when the link is in the viewport to when the user hovers
       * */

      //TODO https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
      <Link
        key={data.id}
        href={data.buttonUrl}
        prefetch={false}
        legacyBehavior
        scroll={false}
      >
        <a
          ref={ref}
          className={setClasses()}
          aria-label={data?.aria?.label || data.buttonText}
          role="link"
          {...attr}
          {...(!clean && { 'data-animation': 'button' })}
          {...(handleOnClick && { onClick: handleOnClick })}
          {...(handleMouseEnter && {
            onMouseEnter: handleMouseEnter,
          })}
          {...(handleMouseLeave && { onMouseLeave: handleMouseLeave })}
          {...(handleMouseMove && { onMouseMove: handleMouseMove })}
        >
          {getBtnContent()}
        </a>
      </Link>
    );
  }
);

ButtonInternalLink.displayName = 'Button Internal Link';

ButtonInternalLink.propTypes = {
  btnData: PropTypes.object,
  getBtnContent: PropTypes.func,
  /**
   * HTML attributes that should be applied to button
   */
  attr: PropTypes.object,
  handleOnClick: PropTypes.func,
  handleMouseEnter: PropTypes.func,
  handleMouseLeave: PropTypes.func,
  handleMouseMove: PropTypes.func,
  setClasses: PropTypes.func,
  /**
   * Should no default styles be applied?
   */
  clean: PropTypes.bool,
};

export default ButtonInternalLink;
