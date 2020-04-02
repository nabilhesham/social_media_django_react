import React, { Fragment } from "react";
import Posts from "./Posts";
import AddPost from "./AddPost";

export default function Dashboard() {
  return (
    <Fragment>
      <div className="dashboard">
        <AddPost />
        <hr />
        <Posts />
      </div>
    </Fragment>
  );
}
