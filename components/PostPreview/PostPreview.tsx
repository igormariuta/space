import { Bookmark, Chat, Eye } from "react-bootstrap-icons";
import moment from "moment";
import UserAvatar from "../UserAvatar/UserAvatar";
import Link from "next/link";

function PostPreview({ post, user }: any) {
  return (
    <div className="container-sm bg-white rounded-2 mb-4-nl">
      <header className="p-4 pb-0">
        <div
          className={"d-flex align-items-center justify-content-between mb-3"}
        >
          <div className="d-flex align-items-start flex-column flex-sm-row align-items-sm-center overflow-hidden">
            <Link href={`/u/${user.username}`}>
              <a
                className={
                  "d-flex align-items-center text-decoration-none me-4 fw-500 text-dark"
                }
              >
                <UserAvatar avatar={user.avatar.data?.attributes} />
                <span>{user.fullName}</span>
              </a>
            </Link>
            <div className="text-secondary whitespace-nowrap">
              <small>{moment(post.attributes.publishedAt).fromNow()}</small>
            </div>
          </div>
          {/* <button disabled className="btn p-1 d-flex align-items-center">
            <PersonPlus size={16} />
          </button> */}
        </div>
        <Link href={`/u/${user.username}/${post.attributes.slug}`}>
          <a className="d-block text-decoration-none text-dark">
            <h2 className="h4 overflow-hidden mb-0">{post.attributes.title}</h2>
          </a>
        </Link>
        {post.attributes.description ? (
          <p className="mt-2 mb-0 overflow-hidden">
            {post.attributes.description}
          </p>
        ) : (
          <></>
        )}
      </header>
      {post.attributes.previewImage.data ? (
        <main className="mt-4">
          <Link href={`/u/${user.username}/${post.attributes.slug}`}>
            <a className="d-block bg-light opacity-100">
              <img
                className="w-100"
                src={
                  (process.env.NEXT_PUBLIC_IMG ?? "") +
                  (post.attributes.previewImage.data.attributes.formats?.medium
                    ?.url ?? post.attributes.previewImage.data.attributes.url)
                }
                alt={post.attributes.title}
                loading="lazy"
              />
            </a>
          </Link>
        </main>
      ) : (
        <></>
      )}

      <footer className={"d-flex justify-content-between px-4 py-3"}>
        <div className="d-flex align-items-center">
          <div className="fw-500 p-0 d-flex align-items-center me-4">
            <Eye className="text-secondary me-2" size={16} />
            <span className="text-secondary">{post.attributes.viewCount}</span>
          </div>
          <div className="fw-500 p-0 d-flex align-items-center me-4">
            <Chat className="text-secondary me-2" size={16} />
            <span className="text-secondary">
              {post.attributes.comments.data.length}
            </span>
          </div>
          {/* <button
            disabled
            className="btn p-0 d-flex align-items-center me-4 opacity-100"
          >
            <Bookmark className="text-secondary" size={16} />
          </button> */}
        </div>
        {/* <div className="d-flex align-items-center">
          <button disabled className="btn p-0 d-flex align-items-center me-3">
            <ArrowDownShort className="text-secondary" size={16} />
          </button>
          <span className="text-secondary fw-500">
            {post.attributes.rating}
          </span>
          <button disabled className="btn p-0 d-flex align-items-center ms-3">
            <ArrowUpShort className="text-secondary" size={16} />
          </button>
        </div> */}
      </footer>
    </div>
  );
}

export default PostPreview;
