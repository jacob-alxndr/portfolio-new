import BadgesFields from "operations/imports/badges";
import ImageFields from "operations/imports/media/image";
const ExperienceListFields = `
  experience {
    id
    tagId
    title
    description
    experienceItems {
      image {
        ... on ImageRecord {
            ${ImageFields}
        }
    }
    eyebrow
      title
      subtitle
      ${BadgesFields}
    }
  }

`;

export default ExperienceListFields;
