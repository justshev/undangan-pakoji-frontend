import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";

const useGetGuest = () => {
  const { guestId } = useParams();
  const router = useRouter();

  const getGuest = async () => {
    try {
      const response = await axiosInstance.get(`/api/guests/${guestId}`);
      if (!response || response.status !== 200) {
        throw new Error("Failed to fetch guest");
      }
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading, isError } = useQuery({
    queryFn: getGuest,
    queryKey: ["guest"],
  });

  if (!isLoading && !data) {
    router.push(`/invitations/${guestId}/not-found`);
  }

  return { data, isLoading, isError };
};

export default useGetGuest;
