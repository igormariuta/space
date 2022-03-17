import Head from "next/head";

function About({ data }: any) {
  return (
    <div>
      <Head>
        <title>{data?.data[0]?.attributes.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>{data.data[0].id}</main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://igma-blog-api.herokuapp.com/api/posts`);
  const data = await res.json();
  return { props: { data } };
}

export default About;
