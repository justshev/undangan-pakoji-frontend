import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const useGetGuests = () => {
  const getGuests = async () => {
    const response = await axiosInstance.get("/api/guests");
    if (!response) {
      throw new Error("Failed to fetch guests");
    }
    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryFn: getGuests,
    queryKey: ["guests"],
  });

  return {
    data,
    isLoading,
  };
};

export default useGetGuests;
