import { useUsersQuery } from "../../reactQuery/users/usersQuery";
import Loader from "../common/loader/Loader";
import Grid from "../grid/Grid";
import loaderIcon from "../../style/images/loader.gif";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { isLoading, isError, data, error } = useUsersQuery();

  const navigate = useNavigate();

  const onPostsClick = (id) => {
    navigate("/user-posts", { state: { id } });
  };

  return isLoading ? (
    <Loader loaderIcon={loaderIcon} />
  ) : (
    <Grid data={data} onPostsClick={onPostsClick} />
  );
};

export default Users;
