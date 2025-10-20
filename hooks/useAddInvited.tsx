"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { FormikProps, useFormik } from "formik";
import { useParams } from "next/navigation";

interface ConfirmedGuestProps {
  confirmedGuests: string;
}

const useAddConfirmedGuest = () => {
  const { guestId } = useParams();

  const { mutate, data, isSuccess, isPending } = useMutation({
    mutationFn: async (values: ConfirmedGuestProps) => {
      const response = await axiosInstance.post(
        `/api/guests/confirm/${guestId}`,
        values
      );
      return await response.data;
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const readyToRedirect = isSuccess && data?.qrCodeToken && !isPending;

  const formik: FormikProps<ConfirmedGuestProps> = useFormik({
    initialValues: {
      confirmedGuests: "",
    },
    onSubmit: (values: ConfirmedGuestProps) => {
      mutate(values);
    },
  });

  return {
    formik,
    readyToRedirect,
    data,
    guestId,
  };
};

export default useAddConfirmedGuest;
