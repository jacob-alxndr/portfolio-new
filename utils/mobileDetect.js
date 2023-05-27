import MobileDetect from 'mobile-detect';

export const checkDevices = () => {
  const mDetect = new MobileDetect(window.navigator.userAgent);

  // const userAgent = mDetect.userAgent();
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.platform) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isTouch = !!mDetect.match(
    /(Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone)/
  );
  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      !window.safari ||
        (typeof safari !== 'undefined' && window.safari.pushNotification)
    );

  return {
    isIOS,
    isTouch,
    isSafari,
    mDetect,
  };
};
export const mobileDetect = () => {
  const { isTouch, isIOS, mDetect } = checkDevices();
  if (isTouch || isIOS) {
    document.body.classList.add('is-touch');
  }
  const isChromium = !!window.chrome;
  if (isIOS || (mDetect.match('Safari') && !isChromium)) {
    document.body.classList.add('is-safari');
  }

  return isIOS || isTouch;
};
