const ImageFields = `
id
_modelApiKey
image {
    url
    mimeType
    responsiveImage(imgixParams: {fit: max, auto: format}) {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
    }
}
mobileImage {
    url
    mimeType
    responsiveImage(imgixParams: {fit: max, auto: format}) {
        alt
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
    }
}
`;

export default ImageFields;
