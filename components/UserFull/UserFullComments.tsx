import Link from "next/link";
import { Comment } from "../Comments/Comments";

const UserFullComments = ({ user }: any) => {
  return user.comments.length ? (
    user.comments?.map((comment: any) => (
      <div key={comment.id} className="bg-white rounded-2 mb-4-nl">
        <div className="container-sm p-4 pb-3">
          <Link href={`/u/${comment.post.user.username}/${comment.post.slug}`}>
            <a className="fw-500 mb-0 text-decoration-none text-dark">
              {comment.post.title}
            </a>
          </Link>
        </div>
        <div style={{ height: "1px", background: "#eee" }}></div>
        <div className="container-sm p-4 pt-3">
          <Comment comment={comment} user={user} avatar={user.avatar} />
        </div>
      </div>
    ))
  ) : (
    <div className="container-sm bg-white rounded-2">
      <p className="p-4 mb-0">No comments yet</p>
    </div>
  );
};

export default UserFullComments;
