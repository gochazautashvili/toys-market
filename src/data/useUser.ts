import API from "@/lib/api";
import { UserType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const {
    data: user,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => API.get<UserType>("/users").then((res) => res.data),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { user, isError, isLoading };
};

export default useUser;
