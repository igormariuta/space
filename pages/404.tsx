import Head from "next/head";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/NotFound/NotFound";

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Not Found | Космическая маслобойка</title>
      </Head>
      <NotFound />
    </Layout>
  );
}
