import useSWR from "swr";
import qs from "qs";
import { fetcher } from "../../utils/fetcher";
import UserFullHeader from "./UserFullHeader";
import { useState } from "react";
import UserFullPosts from "./UserFullPosts";
import UserFullComments from "./UserFullComments";

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

  const [tab, setTab] = useState("Posts");

  return (
    <div className="container-md container-md-to-sm">
      <UserFullHeader
        user={user}
        postsLength={posts?.data?.length}
        tab={tab}
        setTab={setTab}
      />

      <main className="d-flex justify-content-between">
        <div className="container-sm">
          {tab === "Posts" ? (
            <UserFullPosts posts={posts?.data} />
          ) : (
            <UserFullComments user={user} />
          )}
        </div>

        <aside className="ms-4 d-none d-lg-block" style={{ minWidth: "276px" }}>
          <div
            className="sticky"
            style={{ position: "sticky", top: "calc(58px + 1.5rem)" }}
          >
            <div className="bg-white rounded-2 p-4">
              <div>
                <p className="fw-500 mb-2">Stats</p>
                <div className="mb-0 d-flex justify-content-between">
                  <span className="fw-">Post Views</span>
                  <span className="text-secondary fw-500">
                    {posts?.data?.reduce((p: any, c: any) => {
                      return +p + +c.attributes.viewCount;
                    }, 0)}
                  </span>
                </div>
                <div className="mb-0 d-flex justify-content-between">
                  <span className="fw-">Followers</span>
                  <span className="text-secondary fw-500">
                    {user.followers.length}
                  </span>
                </div>
                <div className="mb-0 d-flex justify-content-between">
                  <span className="fw-">Following</span>
                  <span className="text-secondary fw-500">
                    {user.following.length}
                  </span>
                </div>
              </div>

              {/* <p className="fw-500 mb-2">Contacts</p> */}
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default UserFull;
