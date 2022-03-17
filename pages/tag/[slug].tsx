import Head from "next/head";
import { useRouter } from "next/router";
import qs from "qs";
import useSWR, { SWRConfig } from "swr";
import Layout from "../../components/Layout/Layout";
import NotFound from "../../components/NotFound/NotFound";
import PostsList from "../../components/PostsList/PostsList";
import { fetcher } from "../../utils/fetcher";

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const query = qs.stringify({
    filters: {
      tags: {
        $containsi: slug,
      },
    },
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

function Tag() {
  const router = useRouter();
  const { slug } = router.query;

  const query = qs.stringify({
    filters: {
      tags: {
        $containsi: slug,
      },
    },
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
        <title>#{slug} | Космическая маслобойка</title>
      </Head>
      <div className="container-sm mb-4">
        <h2 className="h4 mb-0">#{slug}</h2>
      </div>
      {render()}
    </Layout>
  );
}
export default function TagPage({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <Tag />
    </SWRConfig>
  );
}
