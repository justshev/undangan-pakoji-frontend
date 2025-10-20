import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik, FormikProps } from "formik";
import { axiosInstance } from "@/lib/axios";

export interface CommentValues {
  name: string;
  message: string;
}

const useAddComments = (guestName: string) => {
  const queryClient = useQueryClient();
  const formik: FormikProps<CommentValues> = useFormik({
    initialValues: {
      name: guestName,
      message: "",
    },
    onSubmit: async (values) => {
      mutate(values);
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: CommentValues) => {
      try {
        const response = await axiosInstance.post(`/api/comment`, values);

        return response.data;
      } catch (err) {
        console.log(err);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });

  return {
    formik,
    isPending,
  };
};

export default useAddComments;
