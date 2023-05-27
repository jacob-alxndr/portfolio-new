import Buttons from '../../imports/buttons';
import ImageFields from '../../imports/media/image';
import DescriptionListFields from '../../imports/descriptionList';

const TickerTapeFields = `
fragment TickerTapeFields on TickertapeRecord {
    _modelApiKey
    verticalPaddingTopMobile
    verticalPaddingTop
    verticalPaddingBottomMobile
    verticalPaddingBottom
    titleItalic
    titleBold
    titleSize
    internalTitle
    tickers {
        speed
        fill
        degrees
        yposition
        direction
        backgroundColor
        logos {
          image {
            url
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
        }
      }
}  
`;

export default TickerTapeFields;
