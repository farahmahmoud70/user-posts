import { useLocation, useNavigate } from "react-router-dom";
import { useUserPostsQuery } from "../../reactQuery/posts/postsQuery";
import Accordion from "../common/accordion/Accordion";
import Loader from "../common/loader/Loader";
import loaderIcon from "../../style/images/loader.gif";
import './UserPosts.css'

const UserPosts = () => {
  const location = useLocation();
  const state = location.state;

  const { isLoading, isError, data, error } = useUserPostsQuery(state.id);

  console.log(isError)
  console.log(error)

  return isLoading ? (
    <Loader loaderIcon={loaderIcon} />
  ) : (
    <div className="user-posts-container">
      <h2>{`${state.name}'s posts`}</h2>
      <Accordion data={data} />
    </div>
  );
};

export default UserPosts;
