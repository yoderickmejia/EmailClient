import "bootstrap/dist/css/bootstrap.min.css";

import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
export default function Home() {
  return (
    <div className="container">
      <h1>Post Create</h1>
      <PostCreate />
      <hr />
      <h1>Post List</h1>
      <PostList />
    </div>
  );
}
