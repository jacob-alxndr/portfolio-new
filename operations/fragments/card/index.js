import Buttons from "../../imports/buttons";
import BackgroundImageFields from "../../imports/backgroundMedia/image";

const CardFields = `
      slug
      id
      eyebrow
      title
      subtitle
      description
      backgroundMedia {
        ... on BackgroundImageRecord {
            ${BackgroundImageFields}
        }
    }
      ${Buttons}
`;

export default CardFields;
