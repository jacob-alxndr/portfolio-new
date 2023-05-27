// export const renderBackgroundImages = (backgroundImages, breakpoint) => {
//   if (backgroundImages?.length < 1) return '';
//   const backgroundStyle = [];

//   backgroundImages.forEach((background) => {
//     const hasMobileBackground = background?.mobile;
//     const targetBreakpoint =
//       hasMobileBackground && breakpoint === 'mobile'
//         ? background?.mobile
//         : background;

//     backgroundStyle.push(
//       `url(${targetBreakpoint?.url}) ${targetBreakpoint?.positionX} ${targetBreakpoint?.positionY} ${background?.repeat}`
//     );
//   });

//   return backgroundStyle.join();
// };

// export const renderBackgroundImageSizes = (backgroundImages, breakpoint) => {
//   if (backgroundImages?.length < 1) return '';
//   const backgroundSizeStyle = [];

//   backgroundImages.forEach((background) => {
//     const hasMobileBackground = background?.mobile;
//     const targetBreakpoint =
//       hasMobileBackground && breakpoint === 'mobile'
//         ? background?.mobile
//         : background;
//     backgroundSizeStyle.push(
//       `${(targetBreakpoint?.width || 0) / 2}px ${
//         (targetBreakpoint?.height || 0) / 2
//       }px`
//     );
//   });

//   return backgroundSizeStyle.join();
// };
