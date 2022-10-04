import { useLocation, useNavigate } from "react-router-dom";
import { useUserPostsQuery } from "../../reactQuery/posts/postsQuery";
import Accordion from "../common/accordion/Accordion";
import Loader from "../common/loader/Loader";
import loaderIcon from "../../style/images/loader.gif";

const UserPosts = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  const { isLoading, isError, data, error } = useUserPostsQuery(state.id);

  return isLoading ? (
    <Loader loaderIcon={loaderIcon} />
  ) : (
    <Accordion data={data} />
  );
};

export default UserPosts;
