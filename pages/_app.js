import "../styles/app.globals.scss";
import Head from "next/head";
import { useEffect, useState } from "react";
import { mobileDetect } from "@utils/mobileDetect";
import GlobalNavigation from "@components/Global/GlobalNavigation";
import GlobalFooter from "@components/Global/GlobalFooter";
import { ibmPlexMono, ibmPlexSans } from "@lib/fonts";
import { useStore } from "@lib/store";

export default function App({ Component, pageProps }) {
  // const [isTouch, setIsTouch] = useState(false);
  const isTouch = useStore(({ isTouch }) => isTouch);
  const setIsTouch = useStore((state) => state.setIsTouch);

  useEffect(() => {
    if (isTouch) {
      document.body.classList.add("is-touch");
      setSound(false);
    } else {
      document.body.classList.remove("is-touch");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTouch]);
  useEffect(() => {
    setIsTouch(mobileDetect());
  }, []);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="preconnect" href={`//graphql.datocms.com`}></link>
        <link rel="dns-preconnect" href="https://datocms-assets.com"></link>
        <link rel="dns-prefetch" href="https://datocms-assets.com"></link>
        {/* EXAMPLE:: Adobe typekit integration */}
        {/* <link
          rel="stylesheet"
          href="https://use.typekit.net/fqk8hnt.css"
        ></link> */}
        <style>{`
          :root {
            --font-primary: ${ibmPlexSans.style.fontFamily};
            --font-secondary: ${ibmPlexMono.style.fontFamily};

          }
        `}</style>
      </Head>
      <GlobalNavigation classes="js-site js-site--mobile" />
      <Component {...pageProps} />
      <GlobalFooter classes="js-site js-site--mobile" />
    </>
  );
}
