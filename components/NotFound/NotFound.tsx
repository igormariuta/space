import Image from "next/image";
import Link from "next/link";
import { Bookmark, Chat, EmojiFrown, Eye } from "react-bootstrap-icons";
import image from "../../assets/images/not-found.jpg";

function NotFound() {
  return (
    <div className="container-sm bg-white rounded-2 mb-4">
      <header className="p-4">
        <div className="d-block text-decoration-none text-dark mb-2">
          <h2 className="h4 mb-0">Not Found</h2>
        </div>
        <p className="m-0">
          The requested resource is not found{" "}
          <EmojiFrown size={14} style={{ verticalAlign: "baseline" }} />
        </p>
        <p className="mb-0">
          But don't worry, you can find plenty of other things on our{" "}
          <Link href="/">
            <a className="text-decoration-none text-secondary">homepage</a>
          </Link>
        </p>
      </header>
      <main>
        <div className="d-flex bg-light">
          <Image className="w-100" src={image} alt="Not Found" loading="lazy" />
        </div>
      </main>
      <footer className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <div className="fw-500 p-0 d-flex align-items-center me-4">
            <Eye className="text-secondary me-2" size={16} />
            <span className="text-secondary">0</span>
          </div>
          <div className="fw-500 p-0 d-flex align-items-center me-4">
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">0</span>
          </div>
          <div className="fw-500 p-0 d-flex align-items-center me-4 opacity-100">
            <Bookmark className="text-secondary" size={16} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NotFound;
