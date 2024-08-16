import API from "@/lib/api";
import {  ToyDataType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useWoodenToys = () => {
  return useQuery({
    queryKey: ["toys", "wooden-toys"],
    queryFn: () =>
      API.get<ToyDataType[]>("/toys/wooden-toys").then((res) => res.data),
    retry: 0,
    refetchOnWindowFocus: false,

  });
};

export default useWoodenToys;
