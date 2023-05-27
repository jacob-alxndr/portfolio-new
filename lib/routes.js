/**
 * Link Resolver
 * This function determines the URL for a given Dato model.
 */
const linkResolver = (model) => {
  // console.log('route model: ', model);
  switch (model._modelApiKey) {
    case "home":
      return "/";
    case "project_page":
      return `project/${model.slug}`;
    default:
      return "/";
  }
};

export default linkResolver;
