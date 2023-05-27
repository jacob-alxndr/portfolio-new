import Buttons from '../../imports/buttons';

const DemoSectionFields = `
fragment DemoSectionFields on DemosectionRecord {
    _modelApiKey
    title
    ${Buttons}
  }
`;

export default DemoSectionFields;
