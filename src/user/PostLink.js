import React from "react";
import { useRouteMatch} from "react-router-dom";

export const PostLink = ({ post }) => {
  // const routeInfo = useRouteMatch();
  const { url } = useRouteMatch();

  // console.log("PostLink: Route Info -", routeInfo)
  // console.log("PostLink: useParams -", params)

  return (
    <li className="list-group-item text-truncate">
      <a href={`${url}/${post.id}`}>{post.title}</a>
    </li>
  );
};

export default PostLink;
