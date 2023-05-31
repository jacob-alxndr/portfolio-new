import LayoutFields from "../fragments/layout";
import DemoSectionFields from "../fragments/demoSection";
import GlobalNavigationFields from "operations/fragments/globalNavigation";
import GlobalFooterFields from "operations/fragments/globalFooter";

const GET_HOME = `
query HomeQuery {
  home {
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  
    }
    layout {
      ...LayoutFields
    }
  }
  globalNavigation {
    ${GlobalNavigationFields}
  }
  globalFooter {
    ${GlobalFooterFields}
  }
}

${LayoutFields}
${DemoSectionFields}
`;

export default GET_HOME;
