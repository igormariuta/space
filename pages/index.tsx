import Layout from "../components/Layout/Layout";
import { fetcher } from "../utils/fetcher";
import useSWR, { SWRConfig } from "swr";
import qs from "qs";
import PostsList from "../components/PostsList/PostsList";
import Head from "next/head";
import NotFound from "../components/NotFound/NotFound";
// import NotFound from "../components/NotFound/NotFound";

export async function getServerSideProps() {
  const query = qs.stringify({
    populate: ["previewImage", "user.avatar", "comments"],
    sort: ["publishedAt:desc", "id"],
  });
  const api = `${process.env.API}/api/posts?${query}`;
  const data = await fetcher(api);
  return {
    props: {
      fallback: { [api]: data },
    },
  };
}

const New = () => {
  const query = qs.stringify({
    populate: ["previewImage", "user.avatar", "comments"],
    sort: ["publishedAt:desc", "id"],
  });

  const { data: posts } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/api/posts?${query}`,
    fetcher
  );

  const render = () => {
    if (posts) {
      return posts.data?.length ? (
        <PostsList posts={posts.data} />
      ) : (
        <NotFound />
      );
    } else {
      return <div className="loader"></div>;
    }
  };

  return (
    <Layout>
      <Head>
        <title>New | Космическая маслобойка</title>
      </Head>
      {render()}
    </Layout>
  );
};

export default function NewPage({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <New />
    </SWRConfig>
  );
}
