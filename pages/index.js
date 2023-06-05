import { request } from "../lib/datocms";
import { useQuerySubscription } from "react-datocms";
import GET_HOME from "operations/queries/getHome";
import Layout from "core/Layout";
import dynamic from "next/dynamic";

const components = {
  global_navigation: {
    comp: dynamic(() => import("@components/Global/GlobalNavigation")),
    mapping: require("@components/Global/GlobalNavigation/mapping"),
  },
  hero: {
    comp: dynamic(() => import("@components/Hero")),
    mapping: require(`@components/Hero/mapping`),
  },
  layout: {
    comp: dynamic(() => import("@components/Layout")),
    mapping: require(`@components/Layout/mapping`),
  },
  global_footer: {
    comp: dynamic(() => import("../components/Global/GlobalFooter")),
    mapping: require("../components/Global/GlobalFooter/mapping"),
  },
};

export default function Home({ subscription, preview }) {
  const {
    data: {
      home: { layout, components: bodyComponents },
      // _site,
      globalNavigation,
      globalFooter,
    },
  } = useQuerySubscription(subscription);

  return (
    <div>
      <Layout
        preview={preview}
        components={components}
        navigationData={globalNavigation}
        footerData={globalFooter}
        data={[layout, ...bodyComponents]}
      />
    </div>
  );
}
export async function getStaticProps({ params, preview = false }) {
  // console.log("CONTEXT", {
  //   context,
  //   preview: context.preview,
  //   previewData: context.previewData,
  // });
  // console.log("preview", params);
  // const { preview } = context;
  // const data = await request({
  //   query: GET_HOME,
  //   includeDrafts: preview,
  //   preview,
  //   variables: { limit: 10 },
  // });
  // return {
  //   props: { data },
  // };

  return {
    props: {
      subscription: preview
        ? {
            initialData: await request({
              query: GET_HOME,
              includeDrafts: preview,
              preview,
              variables: { limit: 10 },
            }),
            token: process.env.PREVIEW_MODE_SECRET,
          }
        : {
            enabled: false,
            initialData: await request({
              query: GET_HOME,
              includeDrafts: preview,
              preview,
              variables: { limit: 10 },
            }),
          },
      preview,
    },
  };
}
