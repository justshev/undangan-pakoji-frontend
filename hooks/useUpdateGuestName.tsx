"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateGuestName = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      const res = await axiosInstance.patch(`/api/guests/${id}`, { name });
      if (!res?.data) throw new Error("Failed to update guest");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
  });

  return mutation;
};

export default useUpdateGuestName;
