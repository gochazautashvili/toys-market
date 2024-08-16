import API from "@/lib/api";
import { ToyDataType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useToys = () => {
  return useQuery({
    queryKey: ["toys", "all"],
    queryFn: () => API.get<ToyDataType[]>("/toys").then((res) => res.data),
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default useToys;
