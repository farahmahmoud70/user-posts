import { useUsersQuery } from "../../reactQuery/users/usersQuery";
import Loader from "../common/loader/Loader";
import Grid from "../grid/Grid";
import loaderIcon from "../../style/images/loader.gif";
import { useNavigate } from "react-router-dom";
import "./Users.css";

const Users = () => {
  const { isLoading, isError, data, error } = useUsersQuery();

  const navigate = useNavigate();

  console.log(isError)
  console.log(error)

  const onPostsClick = (id, name) => {
    navigate("/user-posts", { state: { id, name } });
  };

  return isLoading ? (
    <Loader loaderIcon={loaderIcon} />
  ) : (
    <div className="users-container">
      <h2>{"Users"}</h2>
      <Grid data={data} onPostsClick={onPostsClick} />
    </div>
  );
};

export default Users;
