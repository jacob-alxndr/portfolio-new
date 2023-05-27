import LayoutFields from "../fragments/layout";
import HeroFields from "../fragments/hero";
import DemoSectionFields from "../fragments/demoSection";
import CardListFields from "operations/fragments/cardList";
import GlobalNavigationFields from "operations/fragments/globalNavigation";
import GlobalFooterFields from "operations/fragments/globalFooter";
const GET_HOME = `
query HomeQuery {
  home {
    components {
      ... on DemosectionRecord {
        ...DemoSectionFields
      }  
      ... on CardListRecord {
        ...CardListFields
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
${CardListFields}
`;

export default GET_HOME;
