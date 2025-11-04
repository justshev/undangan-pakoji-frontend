"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";

export type FormikValuesAddGuest = {
  name: string;
  totalInvited: string;
};

const useAddGuest = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: FormikValuesAddGuest) => {
      const response = await axiosInstance.post("/api/guest/add", values);
      if (!response.data) {
        alert("Gagal menambahkan tamu");
        throw new Error("Failed to add guest");
      }

      return response.data;
    },
    onSuccess: () => {
      alert("Tamu berhasil ditambahkan");
      queryClient.invalidateQueries({ queryKey: ["guests"] });
    },
  });
  const formik = useFormik<FormikValuesAddGuest>({
    initialValues: {
      name: "",
      totalInvited: "",
    },
    onSubmit: (values: FormikValuesAddGuest) => {
      mutate(values);
      formik.resetForm();
    },
  });

  return {
    formik,
    isPending,
  };
};

export default useAddGuest;
