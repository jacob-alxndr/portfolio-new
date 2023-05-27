import Buttons from '../../imports/buttons';
// import ImageFields from '../../imports/media/image';
import DescriptionListFields from '../../imports/descriptionList';

const PromoFields = `
fragment PromoFields on PromoRecord {
    _modelApiKey
    alignment
    textBlockWidth
    titleItalic
    titleBold
    titleSize
    variant
    backgroundcolor
    verticalPaddingBottom
    verticalPaddingTop
    verticalPaddingBottomMobile
    verticalPaddingTopMobile
    content {
        blocks {
            ... on DescriptionListRecord {
                ${DescriptionListFields}
            }
        }
        value
        links
    }
    numberedList {
        items {
        number
          title
          description
          id
        }
        alignment
        _modelApiKey
        id
      }
    ${Buttons}

    
}  
`;

export default PromoFields;
