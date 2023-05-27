import HeroFields from "../fragments/hero";
import MastheadFields from "../fragments/masthead";
import DemoSectionFields from "../fragments/demoSection";
import CardListFields from "operations/fragments/cardList";
import BackgroundImageFields from "operations/imports/backgroundMedia/image";
const GET_LANDING_PAGE = `
query LandingPageQuery($slug: String) {
    page: allLandingPages( filter: {slug: {eq: $slug}}) {
        _modelApiKey
        _publishedAt
        id
        masthead {
            _modelApiKey
            eyebrow
            title
            backgroundMedia {
                ... on BackgroundImageRecord {
                    ${BackgroundImageFields}
                }
            }
          }
        components {
            ... on CardListRecord {
              ...CardListFields
            }  
          }
    }    
}
${CardListFields}


`;

export default GET_LANDING_PAGE;
// import DemoSectionFields from '../fragments/demoSection';
// import GlobalNavigationFields from '../fragments/globalNavigation';
// import GlobalFooterFields from '../fragments/globalFooter';
// const GET_LANDING_PAGE = `
// query LandingPageQuery($slug: String, $currentLocale: SiteLocale) {
//     page: allLandingPages(locale: $currentLocale, filter: {slug: {eq: $slug}}) {
//         slug
//         _modelApiKey
//         _publishedAt
//         id
//         _allSlugLocales {
//             locale
//             value
//         }
//         components {
//             ... on DemosectionRecord {
//                 ...DemoSectionFields
//             }
//         }

//     }
//     globalNavigation {
//         ${GlobalNavigationFields}
//       }
//       globalFooter{
//         ${GlobalFooterFields}
//       }

// }
// ${DemoSectionFields}
// `;

// export default GET_LANDING_PAGE;
