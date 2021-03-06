import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#b0e5df" />
      <link rel="icon" href="/fav/favicon.ico" />
      <link rel="apple-touch-icon" sizes="60x60" href="/fav/logo192.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav/favicon-16x16.png"
      />
      <meta
        key="description"
        name="description"
        content="Пожалуй лучшая маслобойка во вселенной"
      />
      <meta key="image" property="og:image" content="/public/og-image.jpg" />
    </Head>
  );
};

export default Meta;
