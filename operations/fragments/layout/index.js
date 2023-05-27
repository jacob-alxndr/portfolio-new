import ExperienceListFields from "../experienceList";
import ExternalButtonFields from "../../imports/buttons/external";

const LayoutFields = `
fragment LayoutFields on LayoutRecord {
    eyebrow
    title
    description {
        blocks
        links
        value
      }
      links {
        ... on ExternalButtonRecord {
          ${ExternalButtonFields}  
        }
      }
    bio
    ${ExperienceListFields}
    id
    titleSize
    _modelApiKey
    backgroundColor{hex}
}  
`;

export default LayoutFields;
