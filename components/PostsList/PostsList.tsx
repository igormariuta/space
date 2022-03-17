import PostPreview from "../PostPreview/PostPreview";

const PostsList = ({ posts }: any) => {
  return posts.map((post: any) => (
    <PostPreview
      key={post.id}
      post={post}
      user={post.attributes.user.data.attributes}
    />
  ));
};

export default PostsList;
