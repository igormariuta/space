import Head from "next/head";
import Image from "next/image";
import image from "../../assets/images/og-image.jpg";
import { Chat, Eye } from "react-bootstrap-icons";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>О проекте | Космическая маслобойка</title>
      </Head>
      <div className="container-sm bg-white rounded-2 mb-4">
        <header className="p-4">
          <div className="d-block text-decoration-none text-dark mb-2">
            <h2 className="h4 mb-0">Дабрадошли на космическую маслобойку</h2>
          </div>
          <p className="mb-0">
            В чем конкретно смысл данного проекта - никто вам не скажет, но,
            возможно вы найдете тут <Link href="/">пару интересных статей</Link>
          </p>
        </header>
        <main>
          <div className="d-flex bg-light">
            <Image
              className="w-100"
              src={image}
              alt="Not Found"
              loading="lazy"
            />
          </div>
        </main>
        {/* <footer className={"d-flex justify-content-between px-4 py-3"}>
          <div className="d-flex align-items-center">
            <div className="fw-500 p-0 d-flex align-items-center me-4">
              <Eye className="text-secondary me-2" size={16} />
              <span className="text-secondary">0</span>
            </div>
            <div className="fw-500 p-0 d-flex align-items-center me-4">
              <Chat className="text-secondary me-2" size={16} />
              <span className="text-secondary">0</span>
            </div>
          </div>
        </footer> */}
      </div>
    </Layout>
  );
}
