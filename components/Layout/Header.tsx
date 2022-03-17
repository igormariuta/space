import { Person } from "react-bootstrap-icons";
import Link from "next/link";

function Header({ changeSidebarVis }: any) {
  return (
    <header className="header fixed-top d-flex bg-primary align-items-center px-4 py-2">
      <div className="header-navigation d-flex align-items-center">
        {/* <button
          className="d-none d-lg-block btn p-0 px-2 me-3"
          onClick={() => changeSidebarVis()}
        >
          <List size={25} />
        </button> */}
        <Link href="/">
          <a
            className="header-logo text-dark text-decoration-none me-4"
            style={{ fontWeight: "900", fontSize: "30px", lineHeight: "30px" }}
          ></a>
          {/* SC */}
        </Link>
        {/* <div>
          <input
            className={"form-control bg-primary-gray"}
            type="text"
            placeholder="Search"
            disabled
          />
        </div> */}
      </div>
      <div className="header-user-menu ms-auto">
        <button disabled className="btn p-1 d-flex align-items-center">
          <Person className="me-2" size={20} /> Log In
        </button>
      </div>
    </header>
  );
}

export default Header;
