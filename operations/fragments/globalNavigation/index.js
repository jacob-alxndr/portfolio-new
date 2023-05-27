import ExternalButtonFields from "../../imports/buttons/external";
import InternalButtonFields from "../../imports/buttons/internal";

const GlobalNavigationFields = `
id
_modelApiKey
primary {
    ... on ExternalButtonRecord {
        ${ExternalButtonFields}  
    }
    ... on InternalButtonRecord {
      ${InternalButtonFields}
    }
}

`;

export default GlobalNavigationFields;
