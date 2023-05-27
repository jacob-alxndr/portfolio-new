const BackgroundImageFields = `
id
horizontalAlignment
verticalAlignment
mobileHorizontalAlignment
mobileVerticalAlignment
backgroundImage {
    url
    width
    height
    responsiveImage(imgixParams: {fit: max, auto: format}) {
        src
    }
}
mobileBackgroundImage {
    url
    width
    height
    responsiveImage(imgixParams: {fit: max, auto: format}) {
        src
    }
}
`;

export default BackgroundImageFields;
