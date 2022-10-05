import { useQuery } from "react-query";
import { fetchUserPosts } from "./postsApi";

export const useUserPostsQuery = (id) => {
  //   const {
  //     data,
  //     error,
  //     fetchNextPage,
  //     hasNextPage,
  //     isFetching,
  //     isFetchingNextPage,
  //     status,
  //   } = useInfiniteQuery(
  //     ["posts"],
  //     async () => {
  //       await fetchUserPosts(id, 0);
  //     },
  //     {
  //       getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  //     }
  //   );

  //   return {
  //     data,
  //     error,
  //     fetchNextPage,
  //     hasNextPage,
  //     isFetching,
  //     isFetchingNextPage,
  //     status,
  //   };

  const { isLoading, isError, data, error } = useQuery(`posts_${id}`, () =>
    fetchUserPosts(id)
  );

  return {
    isLoading,
    isError,
    data: data?.data,
    error,
  };
};
