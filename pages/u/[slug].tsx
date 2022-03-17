import useSWR, { SWRConfig } from "swr";
import { fetcher } from "../../utils/fetcher";
import { useRouter } from "next/router";
import UserFull from "../../components/UserFull/UserFull";
import NotFound from "../../components/NotFound/NotFound";
import qs from "qs";
import Layout from "../../components/Layout/Layout";
import Head from "next/head";

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const api = `${process.env.API}/api/users/${slug}`;
  const data = await fetcher(api);
  return {
    props: {
      fallback: { [api]: data },
    },
  };
}

const User = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: user } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/api/users/${slug}`,
    fetcher
  );

  const render = () => {
    if (user) {
      return user.id ? <UserFull user={user} /> : <NotFound />;
    } else {
      return <div className="loader"></div>;
    }
  };

  return (
    <Layout>
      <Head>
        <title>{user?.fullName} | Космическая маслобойка</title>
      </Head>
      {render()}
    </Layout>
  );
};

export default function UserPage({ fallback }: any) {
  return (
    <SWRConfig value={{ fallback }}>
      <User />
    </SWRConfig>
  );
}
