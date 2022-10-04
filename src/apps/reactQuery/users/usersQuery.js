import { useQuery } from "react-query";
import { fetchUsers } from "./usersApi";

export const useUsersQuery = () => {
  const { isLoading, isError, data, error } = useQuery("users", fetchUsers);

  return {
    isLoading,
    isError,
    data: data?.data,
    error,
  };
};
