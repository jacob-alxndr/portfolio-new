import BackgroundImageFields from "../../imports/backgroundMedia/image";

const HeroFields = `
fragment HeroFields on HeroRecord {
    eyebrow
    title
  
    description {
        blocks
        links
        value
      }
    id
    titleSize
    _modelApiKey
    id
    titleSize
    _modelApiKey
    backgroundColor{hex}
    backgroundMedia {
        ... on BackgroundImageRecord {
            ${BackgroundImageFields}
        }
    }

}  
`;

export default HeroFields;
