// import mediaMapping from '../Utilities/Media/mapping';

const getBackgroundImages = (backgrounds) =>
  backgrounds?.map((background) => {
    const url = background?.backgroundImage?.responsiveImage?.src;
    const positionX = background?.horizontalAlignment;
    const positionY = background?.verticalAlignment;
    const repeat = background?.repeat ? "repeat" : "no-repeat";
    const width = background?.backgroundImage?.width;
    const height = background?.backgroundImage?.height;

    const mobileBkg = background?.mobileBackgroundImage;

    return {
      url,
      positionX,
      positionY,
      repeat,
      width,
      height,
      mobile: {
        url: mobileBkg?.responsiveImage?.src || url,
        width: mobileBkg?.width || width,
        height: mobileBkg?.height || height,
        positionX: mobileBkg
          ? background?.mobileHorizontalAlignment
          : positionX,
        positionY: mobileBkg ? background?.mobileVerticalAlignment : positionY,
      },
    };
  });

const mapping = (data) => {
  if (!data) return "";

  const backgroundImageRoot = data?.backgroundMedia?.[0];
  const backgroundImage = backgroundImageRoot?.backgroundImage?.url;

  const backgroundImages =
    data?.backgroundMedia && getBackgroundImages(data?.backgroundMedia);

  return {
    ...data,
    backgroundImages,
    backgroundImage,
  };
};

export default mapping;
