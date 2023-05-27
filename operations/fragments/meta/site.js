const SiteFields = `
fragment SiteFields on Site {
    globalSeo {
      twitterAccount
      titleSuffix
      siteName
      facebookPageUrl
    }
    faviconMetaTags(variants: icon) {
      attributes
      content
      tag
    }
  }
`;

export default SiteFields;
