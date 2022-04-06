import {
  Activity,
  Bookmark,
  Check,
  Check2Circle,
  CheckCircle,
  CheckLg,
  CheckSquare,
  Clock,
  InfoCircle,
  PersonCheck,
  PlusCircle,
  PlusCircleFill,
} from "react-bootstrap-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="d-flex flex-column p-4">
      <ul className="list-unstyled">
        <li className="mb-2">
          <Link href="/">
            <a
              className={
                router.pathname == "/"
                  ? "btn btn-white d-flex align-items-center"
                  : "btn d-flex align-items-center"
              }
            >
              <Clock className="me-3" size={16} />
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/popular">
            <a
              className={
                router.pathname == "/popular"
                  ? "btn btn-white d-flex align-items-center"
                  : "btn  d-flex align-items-center"
              }
            >
              <Activity className="me-3" size={16} />
            </a>
          </Link>
        </li>
        {/* <li className="mb-2">
          <Link href="/my">
            <a
              className={
                router.pathname == "/my"
                  ? "btn btn-white d-flex align-items-center"
                  : "btn  d-flex align-items-center"
              }
            >
              <CheckSquare className="me-3" size={16} />
            </a>
          </Link>
        </li> */}
        {/* <li className="mb-2">
          <Link href="/bookmarks">
            <a
              className={
                router.pathname == "/bookmarks"
                  ? "btn btn-white d-flex align-items-center"
                  : "btn  d-flex align-items-center"
              }
            >
              <Bookmark className="me-3" size={16} />
            </a>
          </Link>
        </li> */}
      </ul>
      <footer className="mt-auto">
        <div className="show-m">
          <Link href="/about">
            <a
              className={
                router.pathname == "/about"
                  ? "btn btn-white d-flex align-items-center"
                  : "btn d-flex align-items-center"
              }
            >
              <InfoCircle className="me-3" size={16} />
            </a>
          </Link>
        </div>

        {/* <div className="hide-m d-flex flex-column">
          <div
            className="my-2 w-100"
            style={{ height: "1px", background: "#e2e2e2" }}
          ></div>
          <small className="text-info">&copy; Копирайт, все дела</small>
        </div> */}
      </footer>
    </aside>
  );
};

export default Sidebar;
