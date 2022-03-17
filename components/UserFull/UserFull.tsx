import useSWR from "swr";
import qs from "qs";
import { fetcher } from "../../utils/fetcher";
import UserAvatar from "../UserAvatar/UserAvatar";
import moment from "moment";
import { ChatLeftDots, PersonPlus } from "react-bootstrap-icons";
import PostsList from "../PostsList/PostsList";

function UserFull({ user }: any) {
  const query = qs.stringify({
    filters: {
      user: {
        username: {
          $eq: user.username,
        },
      },
    },
    populate: ["previewImage", "user.avatar", "comments"],
    sort: ["publishedAt:desc", "id"],
  });

  const { data: posts } = useSWR(
    `${process.env.NEXT_PUBLIC_API}/api/posts?${query}`,
    fetcher
  );

  const renderPosts = () => {
    if (posts) {
      return posts.data?.length ? <PostsList posts={posts.data} /> : "";
    } else {
      return <div className="loader"></div>;
    }
  };

  return (
    <div className="container-md container-md-to-sm">
      <header
        className="bg-white rounded-2 p-4 mb-4 pb-0"
        style={{ marginTop: "3rem" }}
      >
        <div className="d-flex justify-content-between">
          <div className="mb-4" style={{ marginTop: "-4.5rem" }}>
            <UserAvatar borders={true} avatar={user.avatar} size={95} />
          </div>
          <div className="mb-2">
            {/* <button disabled className="btn btn-light">
              <ChatLeftDots size={16} />
              <span className="ms-3 d-none d-sm-inline">Message</span>
            </button> */}
            <button disabled className="btn btn-primary ms-3">
              <PersonPlus size={16} />
              <span className="ms-3 d-none d-sm-inline">Follow</span>
            </button>
          </div>
        </div>

        <div className="mb-4">
          <h1 className="h4 d-flex mb-1 overflow-hidden">{user.fullName}</h1>
          <span className="text-secondary">
            On project since {moment(user.createdAt).format("D MMM  YYYY")}
          </span>
        </div>

        <div>
          <button
            className="btn fw-500 p-0 py-2 me-4 rounded-0 border-0"
            style={{
              boxShadow: "inset 0 -3px 0 0 var(--bs-primary)",
            }}
          >
            Posts
            <small className="text-secondary ms-2">
              {posts?.data?.length ?? 0}
            </small>
          </button>
          <button
            disabled
            className="btn fw-normal p-0 py-2 rounded-0 border-0"
          >
            Comments
          </button>
        </div>
      </header>

      <main className="d-flex justify-content-between">
        <div className="container-sm">{renderPosts()}</div>

        <aside className="ms-4 d-none d-lg-block" style={{ width: "256px" }}>
          <div
            className="sticky"
            style={{ position: "sticky", top: "calc(58px + 1.5rem)" }}
          >
            <div
              className="bg-white rounded-2 p-4 mb-4"
              style={{ position: "sticky", top: "calc(58px + 1.5rem)" }}
            >
              <div>
                <span className="fw-500">Contacts</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default UserFull;
