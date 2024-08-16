import API from "@/lib/api";
import { ToyDataType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useStuffedAnimals = () => {
  return useQuery({
    queryKey: ["toys", "stuffed-toys"],
    queryFn: () =>
      API.get<ToyDataType[]>("/toys/stuffed-toys").then((res) => res.data),
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

export default useStuffedAnimals;
