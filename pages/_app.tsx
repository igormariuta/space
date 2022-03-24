import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <div className="loader"></div> : <></>}
      <Component {...pageProps} />
    </>
  );
}

export default App;
