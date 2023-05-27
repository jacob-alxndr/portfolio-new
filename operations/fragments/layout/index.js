import ExperienceListFields from "../experienceList";
const LayoutFields = `
fragment LayoutFields on LayoutRecord {
    eyebrow
    title
    description {
        blocks
        links
        value
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
