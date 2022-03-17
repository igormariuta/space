import Head from "next/head";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/NotFound/NotFound";

export default function Custom404() {
  return (
    <Layout>
      <NotFound />
    </Layout>
  );
}
