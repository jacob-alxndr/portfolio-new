import ImageFields from '../media/image';

const ExternalButtonFields = `
... on ExternalButtonRecord {
    id
    label
    link
    openInNewTab
    style
    _modelApiKey
    media {
        ... on ImageRecord {
            ${ImageFields}
        }
    }
 
}
`;

export default ExternalButtonFields;
