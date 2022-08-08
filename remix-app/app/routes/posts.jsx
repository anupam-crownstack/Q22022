import { Outlet } from "@remix-run/react";

const PostsRoute = () => {
  return (
    <main>
      <h1>Posts</h1>
      <Outlet />
    </main>
  );
};

export default PostsRoute;
