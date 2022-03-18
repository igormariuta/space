import moment from "moment";
import { PersonPlus } from "react-bootstrap-icons";
import UserAvatar from "../UserAvatar/UserAvatar";

const UserFullHeader = ({ user, postsLength, tab, setTab }: any) => {
  return (
    <header
      className="bg-white rounded-2 p-4 mb-4 pb-0"
      style={{ marginTop: "1.7rem" }}
    >
      <div className="d-flex flex-column flex-sm-row position-relative">
        <div className="mb-4 me-2" style={{ marginTop: "-3rem" }}>
          <UserAvatar borders={true} avatar={user.avatar} size={95} />
        </div>

        <div className="mb-3 overflow-hidden">
          <h1 className="h4 d-flex mb-0 pe-5">{user.fullName}</h1>
          <small className="text-secondary">
            On project since {moment(user.createdAt).format("D MMM  YYYY")}
          </small>
        </div>

        <div className="position-absolute" style={{ right: "0", top: "0" }}>
          <button disabled className="btn btn-primary">
            <PersonPlus size={16} />
          </button>
        </div>
      </div>

      {user.description?.length ? (
        <p className="mb-3">{user.description}</p>
      ) : (
        <></>
      )}

      <div>
        <button
          onClick={() => {
            setTab("Posts");
          }}
          className={
            "btn p-0 py-2 me-4 border-0  rounded-0 " +
            (tab === "Posts" ? "fw-500" : "text-secondary fw-normal")
          }
          style={
            tab === "Posts"
              ? {
                  boxShadow: "inset 0 -3px 0 0 var(--bs-primary)",
                }
              : {}
          }
        >
          Posts
          <small className="text-secondary ms-2">{postsLength ?? 0}</small>
        </button>
        <button
          onClick={() => {
            setTab("Comments");
          }}
          className={
            "btn p-0 py-2 me-4 border-0  rounded-0 " +
            (tab === "Comments" ? "fw-500" : "text-secondary fw-normal")
          }
          style={
            tab === "Comments"
              ? {
                  boxShadow: "inset 0 -3px 0 0 var(--bs-primary)",
                }
              : {}
          }
        >
          Comments
          <small className="text-secondary ms-2">
            {user.comments?.length ?? 0}
          </small>
        </button>
      </div>
    </header>
  );
};

export default UserFullHeader;
