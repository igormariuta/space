import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import UserAvatar from "../UserAvatar/UserAvatar";

function Comments({ comments }: any) {
  const [sortedComments, setSortedComments] = useState([]);

  useEffect(() => {
    if (comments?.length) {
      setSortedComments(
        comments.sort((a: any, b: any) =>
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
          <p className="fw-bold mb-0">{comments.length} Comments</p>
        </div>
      </div>

      <div style={{ height: "1px", background: "#eee" }}></div>
      <main className="container-sm p-4">
        {sortedComments?.map((comment: any) => (
          <Comment
            key={comment.id}
            comment={comment.attributes}
            user={comment.attributes.user.data.attributes}
          />
        ))}
      </main>
    </div>
  );
}

export const Comment = ({
  comment,
  user,
  avatar = user.avatar.data?.attributes,
}: any) => (
  <div className="mb-4-nl">
    <header className="d-flex align-items-center justify-content-between mb-2">
      <Link href={`/u/${user.username}`}>
        <a className="d-flex align-items-center text-dark text-decoration-none overflow-hidden">
          <UserAvatar avatar={avatar} size={35} />
          <div className="d-flex flex-column">
            <div className="mb-0 fw-500">
              <small>{user.fullName}</small>
            </div>
            <small className="text-secondary">
              {moment(comment.createdAt).fromNow()}
            </small>
          </div>
        </a>
      </Link>
    </header>
    <main>
      <ReactMarkdown className="markdown-container">
        {comment.body}
      </ReactMarkdown>
    </main>
  </div>
);

export default Comments;
