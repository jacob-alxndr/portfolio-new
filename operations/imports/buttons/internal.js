import ImageFields from '../media/image';

const InternalButtonFields = `
... on InternalButtonRecord {
    id
    style
    label
    _modelApiKey
    link {
        ... on HomeRecord {
            id
            _modelApiKey
        }
        ... on LandingPageRecord {
            id
            slug
            _modelApiKey
        }
      
    }
    media {
        ... on ImageRecord {
            ${ImageFields}
        }
    
    }
 
  
}
`;

export default InternalButtonFields;
