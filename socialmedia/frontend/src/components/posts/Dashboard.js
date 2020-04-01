import React, { Fragment } from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";

export default function Dashboard() {
  return (
    <Fragment>
      <AddPost />
      <hr />
      <Posts />
    </Fragment>
  );
}
