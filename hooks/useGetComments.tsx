// hooks/useGetComments.ts
import { axiosInstance } from "@/lib/axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetComments = <T = unknown>(): UseQueryResult<T> => {
  const getComments = async (): Promise<T> => {
    const response = await axiosInstance.get("/api/comments");
    return response.data as T;
  };

  return useQuery<T>({
    queryKey: ["comments"],
    queryFn: getComments,
  });
};

export default useGetComments;
