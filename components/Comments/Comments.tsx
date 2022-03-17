import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import UserAvatar from "../UserAvatar/UserAvatar";

function Comments({ comments }: any) {
  const [sortedComments, setSortedComments] = useState([]);

  useEffect(() => {
    if (comments?.data?.length) {
      setSortedComments(
        comments.data.sort((a: any, b: any) =>
          new Date(a.attributes.createdAt)
            ? -1
            : new Date(b.attributes.createdAt)
            ? 1
            : 0
        )
      );
    }
  }, [comments]);

  return (
    <div className="container-md bg-white rounded-2">
      <div className="container-sm p-4 pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <p className="fw-bold mb-0">{comments.data.length} Comments</p>
          {/* <div>
            <button
              disabled
              className="btn fw-normal p-0 py-2 me-4 rounded-0 border-0"
            >
              Popular
            </button>
            <button
              className="btn fw-500 p-0 py-2 rounded-0 border-0"
              style={{
                boxShadow: "inset 0 -3px 0 0 var(--bs-primary)",
              }}
            >
              In Order
            </button>
          </div> */}
        </div>
      </div>

      <div style={{ height: "1px", background: "#eee" }}></div>
      <main className="container-sm p-4">
        {sortedComments?.map((comment: any) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </main>
    </div>
  );
}

const Comment = ({ comment }: any) => (
  <div className="mb-4-nl">
    <header className="d-flex align-items-center justify-content-between mb-2">
      <Link href={`/u/${comment.attributes.user.data.attributes.username}`}>
        <a className="d-flex align-items-center text-dark text-decoration-none overflow-hidden">
          <UserAvatar
            avatar={
              comment.attributes.user.data.attributes.avatar.data?.attributes
            }
            size={35}
          />
          <div className="d-flex flex-column">
            <div className="mb-0 fw-500">
              <small>{comment.attributes.user.data.attributes.fullName}</small>
            </div>
            <small className="text-secondary">
              {moment(comment.attributes.createdAt).fromNow()}
            </small>
          </div>
        </a>
      </Link>
      {/* <div className="d-flex align-items-center">
        <button disabled className="btn p-0 d-flex align-items-center me-3">
          <ArrowDownShort className="text-secondary" size={16} />
        </button>
        <span className="text-secondary fw-500">
          {comment.attributes.rating}
        </span>
        <button disabled className="btn p-0 d-flex align-items-center ms-3">
          <ArrowUpShort className="text-secondary" size={16} />
        </button>
      </div> */}
    </header>
    <main>
      <ReactMarkdown className="markdown-container">
        {comment.attributes.body}
      </ReactMarkdown>
    </main>
  </div>
);

export default Comments;
