import ExternalButtonFields from "../../imports/buttons/external";
import InternalButtonFields from "../../imports/buttons/internal";

const GlobalFooterFields = `
id
_modelApiKey
pagesTitle
pageLinks {
    ... on ExternalButtonRecord {
        ${ExternalButtonFields}
    }
    ... on InternalButtonRecord {
      ${InternalButtonFields}
    }
}


`;

export default GlobalFooterFields;
