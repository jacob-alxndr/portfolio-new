/* eslint-disable no-plusplus */
/* eslint-disable no-useless-escape */
/* eslint-disable import/prefer-default-export */
export const getEmbedId = (url) => {
  // const dotIndex = url.lastIndexOf('?v=');
  // const urlSplit = url.split('?v=');
  // const id = urlSplit[1];
  if (/youtu\.?be/.test(url)) {
    // Look first for known patterns
    let i;
    const patterns = [
      /youtu\.be\/([^#\&\?]{11})/, // youtu.be/<id>
      /\?v=([^#\&\?]{11})/, // ?v=<id>
      /\&v=([^#\&\?]{11})/, // &v=<id>
      /embed\/([^#\&\?]{11})/, // embed/<id>
      /\/v\/([^#\&\?]{11})/, // /v/<id>
    ];

    // If any pattern matches, return the ID
    for (i = 0; i < patterns.length; ++i) {
      if (patterns[i].test(url)) {
        return patterns[i].exec(url)[1];
      }
    }
  }

  return url;
};

export const findObjectWithAttr = (array, attr1, value1) => {
  if (!array?.length) return -1;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i][attr1] === null || value1 === null || value1 === undefined) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (array[i][attr1].toString() === value1.toString()) {
      return i;
    }
  }
  return -1;
};

export const setViewportHeightUnit = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export const isRetinaDevice = () =>
  typeof window !== 'undefined' && window.devicePixelRatio > 1;

export const truncate = (configuration) => {
  const { target: str, max, suffix = '...' } = configuration;

  return str?.length < max
    ? str
    : `${str?.substr(
        0,
        str?.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`;
};

export const formatLocale = (locale) => {
  // Fallback to default locale in datocms
  if (!locale) return 'en';

  return `${locale?.split('-')?.[0]}_${locale?.split('-')?.[1]}`;
};

/**
 * Wrap each element of an array
 * @param {*} elems The array of elements to wrap
 * @param {*} wrapType Type of wrapper ('div', 'span' etc)
 * @param {*} wrapClass Wrapper class(s)
 */
const wrapLines = (elems, wrapType, wrapClass) => {
  elems.forEach((char, i) => {
    // add a wrap for every char (overflow hidden)
    const wrapEl = document.createElement(wrapType);
    wrapEl.classList.add(wrapClass, 'js-wrap');
    wrapEl.setAttribute('aria-hidden', true);
    char.parentNode.appendChild(wrapEl);
    wrapEl.style.setProperty('--i', i);
    wrapEl.appendChild(char);
  });
};

export default wrapLines;

export const pollDebug = (callback) => {
  // Poll global object
  const windowChecker = setInterval(() => {
    console.log('polling for window.DEBUG.UI...');
    const debug = window?.DEBUG?.ui;

    if (debug) {
      clearInterval(windowChecker);
      callback();
    }
  }, 100);
};

export const getMousePos = (e) => {
  const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
  const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
  const target = e.target;

  return {
    x,
    y,
    target,
  };
};

export const pollForElement = (target, callback) => {
  if (!target) {
    callback();
    return;
  }

  const domChecker = setInterval(() => {
    const targetEls = document.querySelectorAll(target);

    if (targetEls) {
      clearInterval(domChecker);
      callback(targetEls);
    }
  }, 100);
};
