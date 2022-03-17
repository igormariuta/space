import { Bookmark, Chat, Eye } from "react-bootstrap-icons";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import UserAvatar from "../UserAvatar/UserAvatar";
import Link from "next/link";

function PostFull({ post, user }: any) {
  return (
    <div className="container-md bg-white rounded-2 mb-4">
      <header className="container-sm p-4 pb-0">
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
                <UserAvatar avatar={user.avatar.data?.attributes} size={20} />
                <span className="d-flex">{user.fullName}</span>
              </a>
            </Link>
            <div className="text-secondary white-space-nowrap">
              <small>{moment(post.attributes.publishedAt).fromNow()}</small>
            </div>
          </div>
        </div>
        <div className="d-block text-decoration-none text-dark">
          <h1 className="h4 mb-0 overflow-hidden">{post.attributes.title}</h1>
          {post.attributes.description ? (
            <p className="mt-2 mb-0 overflow-hidden">
              {post.attributes.description}
            </p>
          ) : (
            <></>
          )}
        </div>
      </header>
      <main>
        {post.attributes.previewImage.data ? (
          <div className="bg-light mt-4">
            <img
              className="w-100"
              src={
                (process.env.REACT_APP_IMG ?? "") +
                (post.attributes.previewImage.data.attributes.formats?.large
                  ?.url ?? post.attributes.previewImage.data.attributes.url)
              }
              alt={post.attributes.title}
              loading="lazy"
            />
          </div>
        ) : (
          <></>
        )}
        <div className="markdown-container container-sm p-4">
          <ReactMarkdown>{post.attributes.body}</ReactMarkdown>
        </div>
        {post.attributes.tags ? (
          <div className="container-sm px-4 mb-4 ">
            {post.attributes.tags
              .replace(/\s/g, "")
              .split(",")
              .map((item: string, i: number) =>
                item.length ? (
                  <Link key={i} href={`/tag/${item}`}>
                    <a className="me-2 text-decoration-none text-info">
                      #{item}
                    </a>
                  </Link>
                ) : (
                  ""
                )
              )}
          </div>
        ) : (
          <></>
        )}
      </main>
      <footer className="container-sm p-4 pt-0">
        <div className={"d-flex justify-content-between"}>
          <div className="d-flex align-items-center">
            <div className="fw-500 p-0 d-flex align-items-center me-4">
              <Eye className="text-secondary me-2" size={16} />
              <span className="text-secondary">
                {post.attributes.viewCount}
              </span>
            </div>
            <div className="fw-500 p-0 d-flex align-items-center me-4">
              <Chat className="text-secondary me-2" size={16} />
              <span className="text-secondary">
                {post.attributes.comments.data.length}
              </span>
            </div>
            <button
              disabled
              className="btn p-0 d-flex align-items-center me-4 opacity-100"
            >
              <Bookmark className="text-secondary" size={16} />
            </button>
          </div>
          {/* <div className="d-flex align-items-center text-secondary">
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
        </div>
      </footer>
    </div>
  );
}

export default PostFull;
