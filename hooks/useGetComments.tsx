import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const useGetComments = () => {
  const getComment = async () => {
    const response = await axiosInstance.get("/api/comments");
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: getComment,
  });

  return {
    data,
    isLoading,
    isError,
  };
};

export default useGetComments;
