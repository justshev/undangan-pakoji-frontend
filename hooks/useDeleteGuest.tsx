"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteGuest = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await axiosInstance.delete(`/api/guests/${id}`);
      if (!res?.data) throw new Error("Failed to delete guest");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
  });

  return mutation;
};

export default useDeleteGuest;
