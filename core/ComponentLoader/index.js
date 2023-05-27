import * as React from 'react';

/**
 * This component can be used as a reminder to provide a proper implementation.
 *
 * This is also the default React component rendered when a component mapping
 * cannot be found.
 */
export const TODOComponent = process.env.NEXT_PUBLIC__PRODUCTION__
  ? () => null
  : ({ _modelApiKey }) => {
      const modelApiKey = _modelApiKey || '';
      React.useEffect(() => {
        console.warn(
          `[ComponentLoader] Could not find a component for modelApiKey "${modelApiKey}"`
        );
      }, [modelApiKey]);
      return React.createElement(
        'section',
        {
          'data-componet-loader-todo-component': '',
          'data-model-api-key': modelApiKey,
        },
        'Could not find a component for ModelApiKey \u201C',
        modelApiKey,
        '\u201D'
      );
    };

/**
 * Renders content from Dato using React components for each
 * type of data model.
 *
 * If a component is not provided for a data model, a default component can
 * be provided. A fallback component is provided by default that will not be
 * rendered in a production build of the app.
 *
 * @param model - The type(s) of a models/components.
 * @param context - Arbitrary data made available to all components.
 *
 * @returns The component loader's content as React components.
 *
 */
export const ComponentLoader = ({
  models = [],
  components = {},
  defaultComponent = TODOComponent,
  context = {},
}) => {
  const renderedModels = React.useMemo(
    () =>
      models.map((model, index) => {
        const modelApiKey = model?._modelApiKey || '';
        const Comp = components[modelApiKey]?.comp || defaultComponent;
        const mapping = components[modelApiKey]?.mapping || null;
        const key = `${index}-${JSON.stringify(model)}`;
        // Use component's mapping function
        let mappedData = model;
        if (mapping?.default) {
          mappedData = mapping?.default(model);
        }

        return React.createElement(Comp, {
          key: key,
          index: index,
          totalSections: models?.length - 1,
          ...context,
          ...mappedData,
        });
      }),
    [components, context, defaultComponent, models]
  );
  return React.createElement(React.Fragment, null, renderedModels);
};
