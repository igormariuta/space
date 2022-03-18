import PostsList from "../PostsList/PostsList";

const UserFullPosts = ({ posts }: any) => {
  if (posts) {
    return posts?.length ? (
      <PostsList posts={posts} />
    ) : (
      <div className="container-sm bg-white rounded-2">
        <p className="p-4 mb-0">No posts yet</p>
      </div>
    );
  } else {
    return <div className="loader"></div>;
  }
};

export default UserFullPosts;
