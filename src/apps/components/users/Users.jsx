import { useUsersQuery } from "../../reactQuery/users/usersQuery";
import Loader from "../common/loader/Loader";
import Grid from "../grid/Grid";
import loaderIcon from "../../style/images/loader.gif";
import { useNavigate } from "react-router-dom";
import Toast from "../common/toast/Toast";
import "./Users.css";

const Users = () => {
  const { isLoading, isError, data, error } = useUsersQuery();

  const navigate = useNavigate();

  const handleErrors = () => {
    return isError
      ? [
          {
            id: 1,
            title: "Error",
            description: error.message,
            type: "error",
          },
        ]
      : [];
  };

  const onPostsClick = (id, name) => {
    navigate("/user-posts", { state: { id, name } });
  };

  return isLoading ? (
    <Loader loaderIcon={loaderIcon} />
  ) : (
    <div className="users-container">
      <Toast toastList={handleErrors()} position="top-right" />
      <h2>{"Users"}</h2>
      <Grid data={data} onPostsClick={onPostsClick} />
    </div>
  );
};

export default Users;
