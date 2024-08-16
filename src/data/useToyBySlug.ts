import API from "@/lib/api";
import { ToyDataType } from "@/types";
import { useQuery } from "@tanstack/react-query";

const useToyBySlug = (slug: string | undefined) => {
  return useQuery({
    queryKey: ["single-toy", slug],
    queryFn: () =>
      API.get<ToyDataType>(`/toys/single-toys/${slug}`).then((res) => res.data),
    retry: 0,
    gcTime: 0,
  });
};

export default useToyBySlug;
