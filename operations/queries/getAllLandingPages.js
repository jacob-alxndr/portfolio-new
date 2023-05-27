const GET_ALL_LANDING_PAGES = `
query AllLandingPagesQuery($first: IntType, $skip: IntType) {
    pages: allLandingPages(
        first: $first,
        skip: $skip,
        ) {
            slug
            _allSlugLocales {
                value
                locale
            }
        }
        meta: _allLandingPagesMeta {
            count
        }
}
`;

export default GET_ALL_LANDING_PAGES;
