import ImageFields from '../media/image';

const ActionButtonFields = `
... on ActionButtonRecord {
    id
    label
    openInDrawer
    style
    _modelApiKey
    title
    subtitle
    content {
        blocks
        links
        value
    }
    media {
        ... on ImageRecord {
            ${ImageFields}
        }
    }
   
}
`;

export default ActionButtonFields;
