import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";
import { renderMetaTags } from "react-datocms";
import { ComponentLoader } from "core/ComponentLoader";
import { useStore } from "@lib/store";
import mappingNav from "@components/Global/GlobalNavigation/mapping";
import mappingFooter from "@components/Global/GlobalFooter/mapping";

export default function Layout({
  children,
  navigationData: cmsNavigationData,
  footerData: cmsFooterData,
  components,
  data,
  seo,
  siteSeo,
  context,
  preview,
  fbData,
}) {
  const router = useRouter();

  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${
    router.asPath.split("?")[0]
  }`;

  const navigationData = useStore(({ navigationData }) => navigationData);
  const setNavigationData = useStore((state) => state.setNavigationData);
  const footerData = useStore(({ footerData }) => footerData);
  const setFooterData = useStore((state) => state.setFooterData);
  // const setPreview = useStore(({ setPreview }) => setPreview);

  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    if (!navigationData) {
      const mapped = mappingNav(cmsNavigationData);
      setNavigationData(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmsNavigationData]);

  // useEffect(() => {
  //   if (!navigationData) {
  //     const mapped = mappingNav(cmsNavigationData);
  //     setNavigationData(mapped);
  //   }

  //   if (!formData && cmsNavigationData?.contactForm) {
  //     const formMapped = mappingForm(cmsNavigationData?.contactForm);
  //     setFormData(formMapped);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cmsNavigationData]);

  useEffect(() => {
    if (!footerData) {
      const mapped = mappingFooter(cmsFooterData);
      setFooterData(mapped);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmsFooterData]);

  // useEffect(() => {
  //   setPreview(preview);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [preview]);
  // console.group();
  // console.log("Components", components);
  // console.log("Data", data);
  // // console.log("Children", children);
  // console.groupEnd();

  useEffect(() => {
    // setFbData(fbData);
    console.log("FIREBASE", fbData);

    // const localTheme = localStorage.getItem("user-theme");
    // console.log("localTheme", localTheme);
    // if (localTheme === `"light"`) {
    //   document.documentElement.setAttribute("user-theme", "light");
    // } else {
    //   document.documentElement.setAttribute("user-theme", "dark");
    //   localStorage.setItem("user-theme", JSON.stringify("dark"));
    // }
  }, []);
  return (
    <>
      <Head>
        <title>Jacob Martinez</title>
        <meta
          name="description"
          content="I'm a Front-end Developer and Designer. I'm a creative thinker who builds responsive and dynamic digital experiences for the web."
          key="desc"
        />
        <meta
          property="og:title"
          content="Jacob Martinez - Front-end Developer & Designer"
        />
        <meta
          property="og:description"
          content="I'm a Front-end Developer and Designer. I'm a creative thinker who builds responsive and dynamic digital experiences for the web."
        />
        <meta
          property="og:image"
          content="https://www.datocms-assets.com/101102/1685468692-jacobmartinez-og-image.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {seo && siteSeo && renderMetaTags([...seo, ...siteSeo.faviconMetaTags])}
        <link rel="icon" href="/favicon.svg" />
        {/* <link rel="canonical" href={canonicalUrl || pageUrl} /> */}
      </Head>
      {/* {children} */}

      <ComponentLoader
        models={data}
        components={components}
        context={{
          ...context, // If you have data that needs to be shared with all components, provide a value to the context prop. The prop will be passed to each component.
        }}
      />
      {children}
    </>
  );
}
