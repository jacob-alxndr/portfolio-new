import "../styles/app.globals.scss";
import Head from "next/head";
import { useEffect, useState, useLayoutEffect } from "react";
import { mobileDetect } from "@utils/mobileDetect";
import GlobalNavigation from "@components/Global/GlobalNavigation";
import GlobalFooter from "@components/Global/GlobalFooter";
import { ibmPlexMono, ibmPlexSans } from "@lib/fonts";
import { useStore } from "@lib/store";
import Lenis from "@studio-freight/lenis";
import { useFrame } from "@studio-freight/hamo";
export default function App({ Component, pageProps }) {
  // const [isTouch, setIsTouch] = useState(false);
  const isTouch = useStore(({ isTouch }) => isTouch);
  const setIsTouch = useStore((state) => state.setIsTouch);
  const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1.1, 1.01 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 4,
      infinite: false,
    });

    window.lenis = lenis;
    setLenis(lenis);
    // lenis.on("scroll", (e) => {
    //   console.log(e.targetScroll);
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFrame((time) => {
    lenis?.raf(time);
  }, []);
  useEffect(() => {
    if (isTouch) {
      document.body.classList.add("is-touch");
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
