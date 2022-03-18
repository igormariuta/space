import { useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import PostFull from "../../components/PostFull/PostFull";
import qs from "qs";
import { fetcher } from "../../utils/fetcher";
import NotFound from "../../components/NotFound/NotFound";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Comments from "../../components/Comments/Comments";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  const { slug } = context.query;

  const query = qs.stringify({
    filters: {
      user: {
        username: {
          $eq: slug[0],
        },
      },
    },
    populate: ["previewImage", "user.avatar", "comments.user.avatar"],
  });

  const api = `${process.env.API}/api/posts/${slug[1]}?${query}`;
  const data = await fetcher(api);

  return {
    props: {
      fallback: { [api]: data },
    },
  };
}

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const query = qs.stringify({
    filters: {
      user: {
        username: {
          $eq: slug![0],
        },
      },
    },
    populate: ["previewImage", "user.avatar", "comments.user.avatar"],
  });

  const { data: post } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/api/posts/${slug![1]}?${query}`,
    fetcher
  );

  const render = () => {
    if (post) {
      return post.id ? (
        <>
          <PostFull post={post} user={post.attributes.user.data.attributes} />
          <Comments comments={post.attributes.comments.data} />
        </>
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
        <title>{post?.attributes?.title} | Космическая маслобойка</title>
        <meta
          key="description"
          name="description"
          content={
            post?.attributes?.description.length
              ? post?.attributes?.description
              : post?.attributes?.body.substring(0, 100) + "..."
          }
        />
        <meta
          key="image"
          property="og:image"
          content={post?.attributes?.previewImage.data?.attributes.url ?? ""}
        />
      </Head>
      {render()}
    </Layout>
  );
};

export default function PostPage({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <Post />
    </SWRConfig>
  );
}
